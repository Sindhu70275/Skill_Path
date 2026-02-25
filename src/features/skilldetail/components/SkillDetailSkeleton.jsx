import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const SkillDetailSkeleton = () => {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        <Grid size={{ xs: 12, md: 8 }}>
          <Stack spacing={2}>
            <Skeleton variant="rectangular" width="100%" height={300} />
            <Skeleton variant="text" width={200} height={40} />
            <Skeleton variant="text" width="100%" height={60} />
            <Skeleton variant="text" width="100%" height={100} />
          </Stack>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Box sx={{ p: 3, border: "1px solid #e0e0e0", borderRadius: 2 }}>
            <Stack spacing={2}>
              <Skeleton variant="text" width={150} height={30} />
              <Skeleton variant="text" width="100%" height={40} />
              <Skeleton variant="text" width="100%" height={40} />
              <Skeleton variant="text" width="100%" height={40} />
              <Skeleton variant="rectangular" width="100%" height={48} />
            </Stack>
          </Box>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Stack spacing={2}>
            <Skeleton variant="text" width={200} height={40} />
            {[1, 2, 3, 4, 5].map((item) => (
              <Skeleton key={item} variant="text" width="100%" height={30} />
            ))}
          </Stack>
        </Grid>

        <Grid size={{ xs: 12 }}>
          <Stack spacing={2}>
            <Skeleton variant="text" width={200} height={40} />
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Box
                key={item}
                sx={{
                  p: 2,
                  border: "1px solid #e0e0e0",
                  borderRadius: 1,
                }}
              >
                <Skeleton variant="text" width="60%" height={30} />
                <Skeleton variant="text" width={100} height={20} />
              </Box>
            ))}
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SkillDetailSkeleton;
