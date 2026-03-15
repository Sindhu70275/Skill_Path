import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { useCourseContext } from "../context/CourseContext";
import LessonInfoSkeleton from "./LessonInfoSkeleton";

const LessonInfo = () => {
  const { currentModule, currentSubsection, videoProgress } =
    useCourseContext();

  if (!currentModule || !currentSubsection) return <LessonInfoSkeleton />;

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
        <Box>
          <Typography variant="caption" color="text.secondary">
            {currentModule?.order}. {currentModule?.title}
          </Typography>
          <Typography variant="h5" sx={{ fontWeight: 600, mt: 0.5 }}>
            {currentSubsection?.title}
          </Typography>
        </Box>
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
            {currentSubsection?.durationInMinutes || 0} min
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
