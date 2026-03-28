import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";
import Divider from "@mui/material/Divider";

const CourseInfoSkeleton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        p: { xs: 2, md: 3 },
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
        <Skeleton variant="rounded" width={80} height={24} />
        <Skeleton variant="rounded" width={60} height={24} />
      </Stack>

      <Skeleton
        variant="text"
        width="100%"
        sx={{ fontSize: "1.25rem", mb: 2 }}
      />

      <Skeleton variant="text" width="100%" sx={{ mb: 2 }} />
      <Skeleton variant="text" width="90%" sx={{ mb: 3 }} />

      <Divider sx={{ my: 2 }} />

      <Stack direction={{ xs: "column", sm: "row" }} spacing={{ xs: 2, sm: 4 }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={60} />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={60} />
        </Stack>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Skeleton variant="circular" width={20} height={20} />
          <Skeleton variant="text" width={60} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default CourseInfoSkeleton;
