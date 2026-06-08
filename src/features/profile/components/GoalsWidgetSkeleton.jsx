import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

const GoalsWidgetSkeleton = () => {
  return (
    <Paper
      elevation={4}
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 6,
      }}
    >
      <Skeleton variant="text" width={150} height={40} sx={{ mb: 3 }} />
      <Divider sx={{ mb: 3 }} />

      <Grid container spacing={2} alignItems="center">
        <Grid size={{ xs: 6 }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Skeleton variant="circular" width={100} height={100} />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                mt: 1,
              }}
            >
              <Skeleton
                variant="text"
                width={80}
                height={24}
                sx={{ fontWeight: 600 }}
              />
              <Skeleton variant="text" width={60} height={16} />
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
          <Skeleton variant="text" width="80%" height={32} />
          <Divider sx={{ my: 2 }} />
          <Skeleton variant="text" width="90%" height={24} />
        </Grid>
      </Grid>

      <Box sx={{ display: "flex", justifyContent: "center", mt: 3 }}>
        <Skeleton variant="rectangular" width={140} height={40} />
      </Box>
    </Paper>
  );
};

export default GoalsWidgetSkeleton;
