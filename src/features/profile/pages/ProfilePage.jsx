import { Box, Container, Grid, Paper, Skeleton } from "@mui/material";

import ProfileHeader from "../components/ProfileHeader";
import GoalsWidget from "../components/GoalsWidget";
import ResumeCard from "../components/ResumeCard";
import ActivityList from "../components/ActivityList";

import { useGetLatestLesson } from "../hooks/useGetLatestLesson";
import { useGetRecentActivity } from "../hooks/useGetRecentActivity";
import { useGetWeeklyProgress } from "../hooks/useGetWeeklyProgress";
import { useGetUserStats } from "../hooks/useGetUserStats";

const ProfilePage = () => {
  const { data: latest, isLoading: loadingLatest } = useGetLatestLesson();
  const { data: recentActivity, isLoading: loadingRecent } =
    useGetRecentActivity();

  return (
    <Box
      sx={{
        py: 4,
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="lg">
        <ProfileHeader />

        <Grid container spacing={4} sx={{ mt: 2 }}>
          <Grid size={{ xs: 12, md: 6 }}>
            {loadingLatest ? (
              <Paper sx={{ p: 4, mb: 3, borderRadius: 3, boxShadow: 8 }}>
                <Skeleton variant="rectangular" height={120} />
              </Paper>
            ) : (
              <ResumeCard data={latest} />
            )}
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <GoalsWidget />
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ActivityList data={recentActivity} isLoading={loadingRecent} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ProfilePage;
