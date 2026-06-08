import { Box, Container, Grid } from "@mui/material";

import ProfileHeader from "../components/ProfileHeader";
import GoalsWidget from "../components/GoalsWidget";
import ResumeCard from "../components/ResumeCard";
import ActivityList from "../components/ActivityList";
import ProfilePageSkeleton from "../components/ProfilePageSkeleton";

import { useGetRecentActivity } from "../hooks/useGetRecentActivity";
import { useGetLatestLesson } from "../hooks/useGetLatestLesson";
import { useGetUserStats } from "../hooks/useGetUserStats";

const ProfilePage = () => {
  const { data: recentActivity, isLoading: loadingRecent } =
    useGetRecentActivity();
  const { data: latestLesson, isLoading: loadingLesson } = useGetLatestLesson();
  const { data: userStats, isLoading: loadingStats } = useGetUserStats();

  const isLoading = loadingRecent || loadingLesson || loadingStats;

  if (isLoading) {
    return <ProfilePageSkeleton />;
  }

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

        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <ResumeCard data={latestLesson} isLoading={loadingLesson} />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <GoalsWidget stats={userStats} isLoading={loadingStats} />
          </Grid>
        </Grid>
        <ActivityList data={recentActivity} isLoading={loadingRecent} />
      </Container>
    </Box>
  );
};

export default ProfilePage;
