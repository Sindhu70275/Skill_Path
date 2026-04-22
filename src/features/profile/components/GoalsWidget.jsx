import { useState } from "react";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import { useUpdateWeeklyGoal } from "../hooks/useUpdateWeeklyGoal";
import { useGetUserStats } from "../hooks/useGetUserStats";
import SetWeeklyGoalDialog from "./SetWeeklyGoalDialog";
import GoalsWidgetSkeleton from "./GoalsWidgetSkeleton";
import {
  PROFILE_TITLES,
  PROFILE_LABELS,
  PROFILE_BUTTONS,
} from "../../../shared/constants/messages";

import { CustomButton } from "../../../shared/components";

const GoalsWidget = () => {
  const [open, setOpen] = useState(false);
  const [weeklyGoal, setWeeklyGoal] = useState(5);
  const updateWeeklyGoal = useUpdateWeeklyGoal();
  const { data: stats, isLoading } = useGetUserStats();

  const handleUpdateGoal = (goal) => {
    updateWeeklyGoal.mutate(goal, {
      onSuccess: () => {
        setWeeklyGoal(goal);
      },
    });
  };

  const weeklyProgress =
    ((stats?.weeklyCompleted ?? 0) / Math.max(stats?.weeklyGoal ?? 1, 1)) * 100;

  if (isLoading) {
    return <GoalsWidgetSkeleton />;
  }

  return (
    <>
      <Box
        sx={{
          p: 3,
          borderRadius: 4,
          boxShadow: 4,
          maxHeight: 230,
        }}
      >
        <Typography variant="h5" fontWeight={700} color="primary.main">
          {PROFILE_TITLES.WIDGET}
        </Typography>

        <Divider sx={{ my: 2 }} />

        <Grid container spacing={2} alignItems="center" sx={{ my: 3 }}>
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
                  {stats?.weeklyCompleted ?? 0}/{stats?.weeklyGoal}
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
              {PROFILE_LABELS.STREAK.replace(
                "{streak}",
                stats?.currentDailyStreak,
              )}
            </Typography>
          </Grid>
        </Grid>

        <Box sx={{ display: "flex", justifyContent: "center", mt: 3, mb: 1.5 }}>
          <CustomButton
            label={PROFILE_BUTTONS.SET_GOAL}
            onClick={() => setOpen(true)}
          />
        </Box>
      </Box>
      <SetWeeklyGoalDialog
        open={open}
        onClose={() => setOpen(false)}
        currentGoal={weeklyGoal}
        onSave={handleUpdateGoal}
      />
    </>
  );
};

export default GoalsWidget;
