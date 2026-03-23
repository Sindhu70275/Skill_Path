import { useContext } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { useCourseContext } from "../context/CourseContext";
import { useLessonComplete } from "../hooks/useUpdateLessonComplete";
import { SnackbarContext } from "../../../shared/context/SnackbarContext";
import { formatDuration } from "../../../shared/utils/formatDuration.js";
import CustomButton from "../../../shared/components/CustomButton";
import LessonInfoSkeleton from "./LessonInfoSkeleton";

const LessonInfo = () => {
  const {
    currentModule,
    currentSubsection,
    selectedLessonId,
    skill,
    videoProgress,
  } = useCourseContext();
  const { mutate: markComplete, isPending: isCompleting } = useLessonComplete();
  const showSnackbar = useContext(SnackbarContext);

  const handleMarkComplete = () => {
    if (!selectedLessonId || !skill._id) return;

    markComplete(
      { lessonId: selectedLessonId, skillId: skill._id },
      {
        onSuccess: (data) => {
          const message = data?.message || "Lesson marked as completed!";
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

  if (!currentModule || !currentSubsection) return <LessonInfoSkeleton />;

  const isCompleted = currentSubsection?.isCompleted;

  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        p: 3,
        mb: 3,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2 }}
      >
        <Box sx={{ flex: 1 }}>
          <Typography variant="caption" color="text.secondary">
            {currentModule?.order}. {currentModule?.title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5 }}>
            {currentSubsection?.title}
          </Typography>
        </Box>
        <CustomButton
          label={
            isCompleted
              ? "Completed"
              : isCompleting
                ? "Marking..."
                : "Mark as completed"
          }
          variant="contained"
          onClick={handleMarkComplete}
          disabled={
            isCompleted || isCompleting || !selectedLessonId || !skill._id
          }
          startIcon={
            isCompleted ? <CheckCircleIcon /> : <PlayCircleOutlineIcon />
          }
          sx={{
            backgroundColor: isCompleted ? "transparent" : "primary.main",
            color: isCompleted ? "success.main" : "#ffffff",
            borderColor: isCompleted ? "success.main" : "primary.main",
          }}
        />
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ color: "text.secondary" }}
      >
        <Stack direction="row" alignItems="center" spacing={0.5}>
          <AccessTimeIcon sx={{ fontSize: 18 }} />
          <Typography variant="body2">
            {formatDuration(currentSubsection?.durationInMinutes)}
          </Typography>
        </Stack>
        <Typography variant="body2">
          • {videoProgress > 0 ? Math.round(videoProgress) : 0}% watched
        </Typography>
      </Stack>
    </Box>
  );
};

export default LessonInfo;
