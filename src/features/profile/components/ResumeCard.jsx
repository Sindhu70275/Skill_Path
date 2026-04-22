import {
  Box,
  Typography,
  Button,
  Paper,
  LinearProgress,
  Chip,
} from "@mui/material";
import Divider from "@mui/material/Divider";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import { useNavigate } from "react-router-dom";
import { CustomButton } from "../../../shared/components";

dayjs.extend(relativeTime);

const ResumeCard = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;

  const lesson = data.lesson;
  const durationMins = Math.floor((lesson?.durationInSecs || 0) / 60);

  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 6,
        display: "flex",
        flexDirection: "column",

      }}
    >
      <Typography variant="h5" color="primary" fontWeight="bold">
        Continue Learning
      </Typography>

      <Divider sx={{ my: 3 }} />

      <Typography variant="body2" color="text.secondary">
        {data.skill?.title} → {data.module?.title}
      </Typography>

      <Typography variant="subtitle1" fontWeight="medium">
        {lesson?.title}
      </Typography>

      <Box sx={{ mt: 1 }}>
        <LinearProgress
          variant="determinate"
          value={lesson?.progressPercentage || 0}
        />
        <Typography variant="caption" color="text.secondary">
          {lesson?.progressPercentage}% completed • {durationMins} mins
        </Typography>
      </Box>

      <Typography variant="caption" color="text.secondary">
        Last watched {dayjs(lesson?.lastWatchedAt).fromNow()}
      </Typography>

      <CustomButton
        label="Resume"
        onClick={() => navigate(`/course/${data.skill?._id}`)}
      />
    </Paper>
  );
};

export default ResumeCard;
