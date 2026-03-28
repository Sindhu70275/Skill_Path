import { useRef, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

import Box from "@mui/material/Box";

import { useLessonProgress } from "../hooks/useUpdateLessonProgress";
import { useLessonComplete } from "../hooks/useUpdateLessonComplete";

import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

import { useCourseContext } from "../context/CourseContext";
import { SnackbarContext } from "../../../shared/context/SnackbarContext";

const VideoPlayer = () => {
  const { selectedLessonId, currentLesson } = useCourseContext();
  const { skillId } = useParams();
  const { mutate: updateLessonProgress } = useLessonProgress();
  const { mutate: updateLessonComplete } = useLessonComplete();
  const showSnackbar = useContext(SnackbarContext);

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
      lessonId: selectedLessonId,
      skillId,
      progressPercentage: playedSeconds / currentLesson.durationInSecs,
      lastWatchedSecond: playedSeconds,
    });
  };

  const handleEnded = () => {
    updateLessonComplete(
      { lessonId: selectedLessonId, skillId },
      {
        onSuccess: (data) => {
          const message = data?.message || "Lesson completed successfully!";
          showSnackbar(message, "success");
        },
        onError: (error) => {
          const message =
            error?.response?.data?.message || "Failed to mark as completed";
          showSnackbar(message, "error");
          console.error(error);
        },
      },
    );
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
