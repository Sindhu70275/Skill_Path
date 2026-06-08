import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

const ActivityListSkeleton = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 3,
        boxShadow: 6,
        maxHeight: 300,
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Skeleton variant="text" width={160} sx={{ fontSize: "1.5rem" }} />

      <Divider sx={{ mt: 2 }} />

      <Box sx={{ py: 2 }}>
        <Skeleton height={60} />
        <Skeleton height={60} />
        <Skeleton height={60} />
      </Box>
    </Paper>
  );
};

export default ActivityListSkeleton;
