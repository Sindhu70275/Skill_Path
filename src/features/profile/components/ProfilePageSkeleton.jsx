import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

import ProfileHeaderSkeleton from "./ProfileHeaderSkeleton";
import ResumeCardSkeleton from "./ResumeCardSkeleton";
import GoalsWidgetSkeleton from "./GoalsWidgetSkeleton";
import ActivityListSkeleton from "./ActivityListSkeleton";

const ProfilePageSkeleton = () => {
  return (
    <Box
      sx={{
        py: 4,
        minHeight: "100vh",
        backgroundAttachment: "fixed",
      }}
    >
      <Container maxWidth="lg">
        <ProfileHeaderSkeleton />

        <Grid container spacing={4} sx={{ my: 4 }}>
          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <ResumeCardSkeleton />
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ height: "100%" }}>
            <GoalsWidgetSkeleton />
          </Grid>
        </Grid>

        <ActivityListSkeleton />
      </Container>
    </Box>
  );
};

export default ProfilePageSkeleton;
