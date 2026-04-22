import { Box, Container, Grid } from "@mui/material";

import ProfileHeader from "../components/ProfileHeader";
import GoalsWidget from "../components/GoalsWidget";
import ResumeCard from "../components/ResumeCard";
import ActivityList from "../components/ActivityList";

import { useGetRecentActivity } from "../hooks/useGetRecentActivity";

const ProfilePage = () => {
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

        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <ResumeCard />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <GoalsWidget />
          </Grid>
        </Grid>
        <ActivityList data={recentActivity} isLoading={loadingRecent} />
      </Container>
    </Box>
  );
};

export default ProfilePage;
