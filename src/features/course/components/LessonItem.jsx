import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";

import AccessTimeIcon from "@mui/icons-material/AccessTime";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";

const LessonItem = ({ lesson, onSelectLesson }) => {
  const handleClick = () => {
    onSelectLesson(lesson._id);
  };

  return (
    <Box
      onClick={handleClick}
      sx={{
        display: "flex",
        alignItems: "center",
        p: 1.5,
        pl: 3,
        cursor: "pointer",
        backgroundColor: lesson.isCompleted
          ? "rgba(0,200,83,0.1)"
          : "transparent",
        "&:hover": { backgroundColor: "#f8f9fa" },
      }}
    >
      <Checkbox
        checked={lesson.isCompleted}
        sx={{
          p: 0,
          mr: 1.5,
          color: "#e0e0e0",
          "&.Mui-checked": { color: "success.main" },
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
            {lesson.durationInMinutes} min
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
