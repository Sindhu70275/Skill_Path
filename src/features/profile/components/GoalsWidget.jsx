import { useState } from "react";
import SetWeeklyGoalDialog from "./SetWeeklyGoalDialog";
import {
  PROFILE_TITLES,
  PROFILE_LABELS,
  PROFILE_BUTTONS,
} from "../../../shared/constants/messages";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { CustomButton } from "../../../shared/components";

const GoalsWidget = () => {
  const [open, setOpen] = useState(false);
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const [lessonsThisWeek, setLessonsThisWeek] = useState(3);
  const [streak, setStreak] = useState(6);

  const weeklyProgress = (lessonsThisWeek / weeklyGoal) * 100;

  return (
    <>
      <Box
        sx={{
          p: 3,
          borderRadius: 2,
          boxShadow: 3,
          backgroundColor: "background.paper",
        }}
      >
        <Typography variant="h3">{PROFILE_TITLES.WIDGET}</Typography>

        <Divider sx={{ my: 3 }} />

        <Grid container spacing={2} alignItems="center">
          <Grid size={{ xs: 6 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                position: "relative",
              }}
            >
              <Box sx={{ width: 100, height: 100 }}>
                <CircularProgressbar value={weeklyProgress} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                }}
              >
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  {lessonsThisWeek}/{weeklyGoal}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {PROFILE_LABELS.LESSONS}
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid
            size={{ xs: 6 }}
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Typography variant="h5">{PROFILE_LABELS.SET_GOAL}</Typography>
            <Divider sx={{ my: 2 }} />
            <Typography variant="body1">
              {PROFILE_LABELS.STREAK.replace("{streak}", streak)}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
          <CustomButton
            label={PROFILE_BUTTONS.SET_GOAL}
            variant="outlined"
            onClick={() => setOpen(true)}
          />
        </Box>
      </Box>
      <SetWeeklyGoalDialog
        open={open}
        onClose={() => setOpen(false)}
        currentGoal={weeklyGoal}
        onSave={setWeeklyGoal}
      />
    </>
  );
};

export default GoalsWidget;
