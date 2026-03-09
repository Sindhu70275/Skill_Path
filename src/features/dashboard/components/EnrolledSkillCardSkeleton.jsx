import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Skeleton from "@mui/material/Skeleton";
import Grid from "@mui/material/Grid";

const EnrolledSkillCardSkeleton = ({ count = 4 }) => {
  return (
    <Grid container spacing={2}>
      {[...Array(count)].map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
          <Card sx={{ maxWidth: 280, boxShadow: 2 }}>
            <Box sx={{ position: "relative" }}>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={160}
                animation="wave"
              />
            </Box>
            <Box
              sx={{
                padding: 2,
                display: "flex",
                flexDirection: "column",
                gap: 1.5,
              }}
            >
              <Skeleton
                variant="text"
                width="80%"
                height={24}
                animation="wave"
              />
              <Box sx={{ width: "100%" }}>
                <Skeleton
                  variant="rectangular"
                  width="100%"
                  height={8}
                  sx={{ borderRadius: 4 }}
                  animation="wave"
                />
                <Skeleton
                  variant="text"
                  width="40%"
                  height={16}
                  animation="wave"
                  sx={{ mt: 0.5 }}
                />
              </Box>
              <Skeleton
                variant="rectangular"
                width="100%"
                height={36}
                sx={{ borderRadius: 1 }}
                animation="wave"
              />
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default EnrolledSkillCardSkeleton;
