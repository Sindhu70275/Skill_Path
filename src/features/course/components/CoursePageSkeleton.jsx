import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

const CoursePageSkeleton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        minHeight: "100vh",
        px: { xs: 4, md: 8 },
        py: 3,
      }}
    >
      <Box
        sx={{
          backgroundColor: "#ffffff",
          borderRadius: 2,
          p: 2,
          mb: 3,
          boxShadow: 1,
        }}
      >
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 1 }}>
          <Skeleton variant="circular" width={32} height={32} />
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width="40%" sx={{ fontSize: "1.5rem" }} />
        </Stack>
      </Box>

      <Grid container spacing={3}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <Box
            sx={{
              backgroundColor: "#000",
              borderRadius: 2,
              overflow: "hidden",
              mb: 3,
            }}
          >
            <VideoPlayerSkeleton />
          </Box>

          <Box
            sx={{
              backgroundColor: "#ffffff",
              p: 3,
              borderRadius: 2,
              boxShadow: 1,
            }}
          >
            <Skeleton
              variant="text"
              width="80%"
              sx={{ fontSize: "1.25rem", mb: 2 }}
            />
            <Skeleton variant="rectangular" height={120} sx={{ mb: 2 }} />
            <Skeleton variant="text" width="60%" />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, lg: 4 }}>
          <Box
            sx={{
              position: "sticky",
              top: 24,
              backgroundColor: "#ffffff",
              borderRadius: 2,
              p: 2,
              boxShadow: 1,
            }}
          >
            <Stack spacing={2}>
              <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
                <Skeleton variant="text" width="70%" sx={{ mb: 1 }} />
                <Skeleton variant="rectangular" height={32} />
              </Box>
              <Box sx={{ p: 2, border: "1px solid #e0e0e0", borderRadius: 1 }}>
                <Skeleton variant="text" width="70%" sx={{ mb: 1 }} />
                <Skeleton variant="rectangular" height={32} />
              </Box>
            </Stack>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default CoursePageSkeleton;
