import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";

import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

import { CustomButton } from "../../../shared/components";
import {
  PROFILE_TITLES,
  PROFILE_LABELS,
  PROFILE_BUTTONS,
  PROFILE_CHIP_LABELS,
} from "../../../shared/constants/messages";
import ResumeCardSkeleton from "./ResumeCardSkeleton";

dayjs.extend(relativeTime);

const ResumeCard = ({ data, isLoading }) => {
  const navigate = useNavigate();

  if (isLoading) {
    return <ResumeCardSkeleton />;
  }

  if (!data) return null;

  const lesson = data.lesson;
  const isCompleted = lesson?.isCompleted;
  const durationMins = Math.floor((lesson?.durationInSecs || 0) / 60);

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: 4,
        maxHeight: 230,
      }}
    >
      <Typography variant="h5" fontWeight={700} color="primary.main">
        {PROFILE_TITLES.CONTINUE_LEARNING}
      </Typography>

      <Divider sx={{ my: 2 }} />

      <Typography variant="caption" color="text.secondary">
        {data.skill?.title} → {data.module?.title}
      </Typography>

      <Typography variant="subtitle1" fontWeight={600}>
        {lesson?.title}
      </Typography>

      <Box mt={1} display="flex" alignItems="center" gap={1}>
        <Chip
          label={
            isCompleted
              ? PROFILE_CHIP_LABELS.COMPLETED
              : PROFILE_CHIP_LABELS.IN_PROGRESS
          }
          color={isCompleted ? "success" : "warning"}
          size="small"
        />
        <Typography variant="caption" color="text.secondary">
          {dayjs(lesson?.lastWatchedAt).fromNow()}
        </Typography>
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
        <AccessTimeIcon sx={{ fontSize: 20 }} />
        <Typography variant="body2">
          {PROFILE_LABELS.MINS.replace("{duration}", durationMins)}
        </Typography>
      </Box>

      <Box mt={3} display="flex" gap={2} justifyContent="center">
        <CustomButton
          label={
            isCompleted
              ? PROFILE_BUTTONS.REVISIT_LESSON
              : PROFILE_BUTTONS.RESUME
          }
          onClick={() => navigate(`/course/${data.skill?._id}`)}
        />
        {isCompleted && (
          <CustomButton
            label={PROFILE_BUTTONS.NEXT_LESSON}
            variant="outlined"
            onClick={() => navigate(`/course/${data.skill?._id}`)}
          />
        )}
      </Box>
    </Paper>
  );
};

export default ResumeCard;
