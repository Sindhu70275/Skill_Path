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
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        sx={{ mb: 2 }}
      >
        <Box>
          <Skeleton variant="text" width={120} height={20} />
          <Skeleton variant="text" width={200} height={32} sx={{ mt: 0.5 }} />
        </Box>
      </Stack>

      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
        sx={{ color: "text.secondary" }}
      >
        <Skeleton variant="text" width={80} height={20} />
        <Skeleton variant="text" width={100} height={20} />
      </Stack>
    </Box>
  );
};

export default LessonInfoSkeleton;
