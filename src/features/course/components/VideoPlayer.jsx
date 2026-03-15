import { useRef, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import Box from "@mui/material/Box";

import { useLessonProgress } from "../hooks/useUpdateLessonProgress";
import { useLessonComplete } from "../hooks/useUpdateLessonComplete";

import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

import { useCourseContext } from "../context/CourseContext";

const VideoPlayer = () => {
  const { selectedLessonId, currentLesson } = useCourseContext();
  const { skillId } = useParams();
  const { mutate: updateLessonProgress } = useLessonProgress();
  const { mutate: updateLessonComplete } = useLessonComplete();

  const isLoading = !currentLesson && selectedLessonId;

  const lastSavedRef = useRef(0);
  const playerRef = useRef(null);

  // Reset progress tracking when lesson changes
  useEffect(() => {
    lastSavedRef.current = 0;
  }, [selectedLessonId]);

  // Resume playback from last watched time
  useEffect(() => {
    if (playerRef.current && currentLesson?.lastWatchedSecond) {
      playerRef.current.currentTime = currentLesson.lastWatchedSecond;
    }
  }, [currentLesson]);

  if (isLoading) return <VideoPlayerSkeleton />;

  const handleProgress = (e) => {
    const playedSeconds = Math.floor(e.target.currentTime);

    if (playedSeconds - lastSavedRef.current < 30) return;

    lastSavedRef.current = playedSeconds;

    updateLessonProgress({
      selectedLessonId,
      skillId,
      progressPercentage:
        playedSeconds / (currentLesson.durationInMinutes * 60),
      lastWatchedSecond: playedSeconds,
    });
  };

  const handleEnded = () => {
    updateLessonComplete({ selectedLessonId, skillId });
  };

  return (
    <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
      <ReactPlayer
        src={currentLesson?.videoUrl}
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
