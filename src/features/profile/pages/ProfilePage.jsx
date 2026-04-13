import { lazy, Suspense } from "react";
import { Box, Container, Grid, Typography, Paper } from "@mui/material";
import ProfileHeader from "../components/ProfileHeader";
import GoalsWidget from "../components/GoalsWidget";

// const ProgressCard = lazy(() => import("../components/ProgressCard")); // Placeholder
// const AchievementsGrid = lazy(() => import("../components/AchievementsGrid"));
// const ActivityTimeline = lazy(() => import("../components/ActivityTimeline"));
// const GoalsWidget = lazy(() => import("../components/GoalsWidget"));

const ProfilePage = () => {
  return (
    <Box sx={{ py: 4 }}>
      <Container maxWidth="lg">
        <ProfileHeader />

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 5 }}>
            <GoalsWidget />
          </Grid>
          <Grid item xs={12} lg={8}>
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Progress Overview
              </Typography>
              {/* Charts and stats placeholder */}
              <Box
                sx={{
                  height: 300,
                  bgcolor: "grey.100",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Progress charts and stats will go here
              </Box>
            </Paper>

            {/* Activity Timeline */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Recent Activity
              </Typography>
              <Box
                sx={{
                  height: 400,
                  bgcolor: "grey.100",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Activity timeline will go here
              </Box>
            </Paper>
          </Grid>

          {/* Achievements Grid + Goals Widget */}
          <Grid item xs={12} lg={4}>
            {/* Achievements */}
            <Paper sx={{ p: 3, mb: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Achievements
              </Typography>
              <Box
                sx={{
                  height: 250,
                  bgcolor: "grey.100",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Badges grid will go here
              </Box>
            </Paper>

            {/* Goals */}
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Goals
              </Typography>
              <Box
                sx={{
                  height: 200,
                  bgcolor: "grey.100",
                  borderRadius: 1,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                Goals widget will go here
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
