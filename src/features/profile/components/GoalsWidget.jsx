import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Slider from "@mui/material/Slider";
import CircularProgress from "@mui/material/CircularProgress";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import FireIcon from "@mui/icons-material/LocalFireDepartment";

const GoalsWidget = () => {
  const [open, setOpen] = useState(false);
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const [streak, setStreak] = useState(3);
  const [lessonsThisWeek, setLessonsThisWeek] = useState(4);
  const [totalLessonsWeek, setTotalLessonsWeek] = useState(7);

  const handleSetGoal = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleGoalChange = (event, newValue) => {
    setWeeklyGoal(newValue);
  };

  const handleSaveGoal = () => {
    console.log("Goal set to", weeklyGoal, "lessons per week");
    setOpen(false);
  };

  const weeklyProgress = (lessonsThisWeek / totalLessonsWeek) * 100;

  return (
    <Box sx={{ p: 3 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <FireIcon color="primary" sx={{ fontSize: 24 }} />
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Learning Goals
        </Typography>
      </Box>

      <Box sx={{ display: "flex", gap: 3, alignItems: "center", mb: 3 }}>
        <Box sx={{ textAlign: "center" }}>
          <Box sx={{ width: 80, height: 80, mx: "auto", mb: 1 }}>
            <CircularProgressbar
              value={streak}
              maxValue={7}
              text={`${streak}🔥`}
              styles={buildStyles({
                pathColor: "#ff6b6b",
                textColor: "#ff6b6b",
                trailColor: "#e0e0e0",
              })}
            />
          </Box>
          <Typography variant="body2" color="text.secondary">
            Day Streak
          </Typography>
        </Box>

        <Box sx={{ flex: 1 }}>
          <Box sx={{ width: 120, height: 120, mx: "auto" }}>
            <CircularProgressbar
              value={weeklyProgress}
              text={`${Math.round(weeklyProgress)}%`}
              styles={buildStyles({
                pathColor: weeklyProgress >= 80 ? "#4caf50" : "#ff9800",
                textColor: weeklyProgress >= 80 ? "#4caf50" : "#ff9800",
                trailColor: "#e0e0e0",
              })}
            />
          </Box>
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ textAlign: "center", mt: 1 }}
          >
            {lessonsThisWeek}/{weeklyGoal} lessons this week
          </Typography>
        </Box>
      </Box>

      <Button
        variant="outlined"
        fullWidth
        onClick={handleSetGoal}
        sx={{ borderColor: "primary.main", color: "primary.main", py: 1.5 }}
      >
        Set Weekly Goal
      </Button>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>Set Your Weekly Learning Goal</DialogTitle>
        <DialogContent>
          <Typography variant="body1" sx={{ mb: 2 }}>
            How many lessons do you want to complete per week?
          </Typography>
          <Box sx={{ px: 2 }}>
            <Typography variant="body2" sx={{ mb: 1 }}>
              {weeklyGoal} lessons per week
            </Typography>
            <Slider
              value={weeklyGoal}
              onChange={handleGoalChange}
              min={1}
              max={20}
              step={1}
              marks={[
                { value: 5, label: "5 lessons" },
                { value: 10, label: "10 lessons" },
                { value: 15, label: "15 lessons" },
              ]}
              sx={{ color: "primary.main" }}
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSaveGoal} variant="contained">
            Save Goal
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default GoalsWidget;
