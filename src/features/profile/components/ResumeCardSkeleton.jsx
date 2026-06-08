import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";

const ResumeCardSkeleton = () => {
  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 4,
        boxShadow: 4,
        maxHeight: 230,
      }}
    >
      <Skeleton variant="text" width={180} sx={{ fontSize: "1.5rem" }} />

      <Divider sx={{ my: 2 }} />

      <Skeleton variant="text" width="60%" sx={{ fontSize: "0.75rem" }} />
      <Skeleton variant="text" width="80%" sx={{ fontSize: "1rem", mt: 0.5 }} />

      <Box mt={1} display="flex" alignItems="center" gap={1}>
        <Skeleton variant="rounded" width={80} height={24} />
        <Skeleton variant="text" width={80} sx={{ fontSize: "0.75rem" }} />
      </Box>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
        <Skeleton variant="circular" width={20} height={20} />
        <Skeleton variant="text" width={60} sx={{ fontSize: "0.875rem" }} />
      </Box>

      <Box mt={3} display="flex" gap={2} justifyContent="center">
        <Skeleton variant="rectangular" width={120} height={36} sx={{ borderRadius: 1 }} />
      </Box>
    </Paper>
  );
};

export default ResumeCardSkeleton;

