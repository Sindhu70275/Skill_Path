import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Skeleton from "@mui/material/Skeleton";

const LessonInfoSkeleton = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ffffff",
        borderRadius: 2,
        p: 3,
        mb: 3,
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
      }}
    >
      <Stack
        direction={{ xs: "column", md: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", md: "flex-start" }}
        sx={{ mb: 2, gap: { xs: 2, md: 0 } }}
      >
        <Box sx={{ flex: 1 }}>
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={200} height={32} sx={{ mt: 0.5 }} />
          <Stack
            direction={{ xs: "row" }}
            alignItems={{ xs: "flex-start", sm: "center" }}
            spacing={2}
            sx={{ mt: 1 }}
          >
            <Skeleton variant="text" width={80} height={20} />
            <Skeleton variant="text" width={100} height={20} />
          </Stack>
        </Box>
        <Skeleton
          variant="rectangular"
          height={36}
          sx={{ borderRadius: 1, width: { xs: "100%", md: 140 } }}
        />
      </Stack>
    </Box>
  );
};

export default LessonInfoSkeleton;
