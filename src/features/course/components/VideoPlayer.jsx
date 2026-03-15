import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import Box from "@mui/material/Box";

import { useLessonProgress } from "../hooks/useUpdateLessonProgress";
import { useLessonComplete } from "../hooks/useUpdateLessonComplete";

import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

import { useCourseContext } from "../context/CourseContext";

const VideoPlayer = () => {
  const { selectedLessonId: lessonId, currentLesson: data } = useCourseContext();
  const { skillId } = useParams();
  const { mutate: updateLessonProgress } = useLessonProgress();
  const { mutate: updateLessonComplete } = useLessonComplete();

  const isLoading = !data && lessonId;

  const lastSavedRef = useRef(0);
  const playerRef = useRef(null);

  // Reset progress tracking when lesson changes
  useEffect(() => {
    lastSavedRef.current = 0;
  }, [lessonId]);

  // Resume playback from last watched time
  useEffect(() => {
    if (playerRef.current && data?.lastWatchedSecond) {
      playerRef.current.currentTime = data.lastWatchedSecond;
    }
  }, [data]);

  if (isLoading) return <VideoPlayerSkeleton />;

  const handleProgress = (e) => {
    const playedSeconds = Math.floor(e.target.currentTime);

    if (playedSeconds - lastSavedRef.current < 30) return;

    lastSavedRef.current = playedSeconds;

    updateLessonProgress({
      lessonId,
      skillId,
      progressPercentage: playedSeconds / (data.durationInMinutes * 60),
      lastWatchedSecond: playedSeconds,
    });
  };

  const handleEnded = () => {
    updateLessonComplete({ lessonId, skillId });
  };

  return (
    <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
      <ReactPlayer
        src={data?.videoUrl}
        width="100%"
        height="100%"
        controls
        onTimeUpdate={handleProgress}
        onEnded={handleEnded}
      />
    </Box>
  );
};

export default VideoPlayer;
