import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

import { formatDuration } from "../../../shared/utils/formatDuration.js";
import { useCourseContext } from "../context/CourseContext";

const LessonItem = ({ lesson }) => {
  const { setSelectedLessonId, selectedLessonId, setSelectedModuleId } =
    useCourseContext();

  const handleClick = () => {
    setSelectedModuleId(lesson.moduleId);
    setSelectedLessonId(lesson._id);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1.5,
        cursor: "pointer",
        borderRadius: 1,
        mb: 0.5,
        backgroundColor:
          lesson._id === selectedLessonId ? "#e3f2fd" : "transparent",
        "&:hover": {
          backgroundColor:
            lesson._id === selectedLessonId ? "#e3f2fd" : "rgba(0,0,0,0.04)",
        },
      }}
    >
      <Checkbox
        checked={lesson.isCompleted}
        sx={{
          p: 0,
          mr: 1.5,
          color: "#e0e0e0",
          "&.Mui-checked": { color: "primary.main" },
        }}
      />

      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography
          variant="body2"
          sx={{
            fontWeight: lesson.isCompleted ? 500 : 400,
            color: lesson.isCompleted ? "text.secondary" : "text.primary",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          {lesson.title}
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={0.5}
          sx={{ mt: 0.25 }}
        >
          <AccessTimeIcon sx={{ fontSize: 12, color: "text.secondary" }} />
          <Typography variant="caption" color="text.secondary">
            {formatDuration(lesson.durationInSecs)}
          </Typography>
        </Stack>
      </Box>

      <IconButton
        size="small"
        sx={{ color: "text.secondary", "&:hover": { color: "primary.main" } }}
      >
        <PlayCircleOutlineIcon />
      </IconButton>
    </Box>
  );
};

export default LessonItem;
