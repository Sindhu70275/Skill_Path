import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";

const SkillCardSkeleton = () => {
  return (
    <Card sx={{ maxWidth: "auto", height: "100%" }}>
      <Skeleton variant="rectangular" height={180} animation="wave" />
      <CardContent sx={{ padding: "1rem" }}>
        <Skeleton variant="text" width="60%" height={32} animation="wave" />
        <Skeleton variant="text" width="100%" height={20} animation="wave" />
        <Skeleton variant="text" width="80%" height={20} animation="wave" />
        <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
          <Skeleton
            variant="rounded"
            width="50%"
            height={36}
            animation="wave"
          />
          <Skeleton
            variant="rounded"
            width="40%"
            height={36}
            animation="wave"
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export const SkillsLoadingSkeleton = ({ count = 4 }) => {
  return (
    <Grid container spacing={2} columns={12} sx={{ paddingY: "1rem" }}>
      {Array.from({ length: count }).map((_, index) => (
        <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3, xl: 2 }} key={index}>
          <SkillCardSkeleton />
        </Grid>
      ))}
    </Grid>
  );
};

export default SkillCardSkeleton;
