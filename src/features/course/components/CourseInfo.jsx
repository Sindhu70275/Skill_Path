import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Divider from "@mui/material/Divider";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { useCourseContext } from "../context/CourseContext";
import { formatDuration } from "../../../shared/utils/formatDuration.js";

const CourseInfo = () => {
  const { skill: course } = useCourseContext();
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        p: { xs: 2, md: 3 },
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        {course?.category && (
          <Chip
            label={course.category}
            sx={{
              backgroundColor: "primary.main",
              color: "#ffffff",
              fontWeight: 500,
            }}
          />
        )}
        {course?.level && (
          <Chip
            label={course.level}
            variant="outlined"
            sx={{
              borderColor: "secondary.main",
              color: "secondary.main",
              fontWeight: 500,
            }}
          />
        )}
      </Stack>

      <Typography
        variant={{ xs: "subtitle1", md: "h6" }}
        sx={{ fontWeight: 600, mb: 2 }}
      >
        {course?.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          color: "text.secondary",
          mb: 3,
          lineHeight: 1.8,
          fontSize: { xs: "0.9rem", md: "1rem" },
        }}
      >
        {course?.description}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2, sm: 4 }}
        sx={{ color: "text.secondary" }}
      >
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccessTimeIcon sx={{ fontSize: 20 }} />
          <Typography variant="body2">
            {formatDuration(course?.durationInSecs)}
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <PlayCircleOutlineIcon sx={{ fontSize: 20 }} />
          <Typography variant="body2">
            {course?.lessonsCount} lessons
          </Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <CheckCircleIcon sx={{ fontSize: 20 }} />
          <Typography variant="body2">
            {course?.modulesCount} modules
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default CourseInfo;
