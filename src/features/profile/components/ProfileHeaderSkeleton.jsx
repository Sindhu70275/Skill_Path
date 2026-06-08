import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const ProfileHeaderSkeleton = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        justifyContent: { xs: "flex-start", sm: "space-between" },
        alignItems: { xs: "flex-start", sm: "center" },
        gap: 3,
        mb: 4,
        p: 3,
        borderRadius: 3,
        boxShadow: 6,
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Skeleton
          variant="circular"
          sx={{ width: { xs: 60, md: 120 }, height: { xs: 60, md: 120 } }}
        />
        <Box>
          <Skeleton variant="text" width={200} sx={{ fontSize: "2rem", mb: 0.5 }} />
          <Skeleton variant="text" width={180} sx={{ fontSize: "0.875rem" }} />
        </Box>
      </Box>

      <Box
        sx={{
          alignSelf: { xs: "stretch", sm: "center" },
          width: { xs: "100%", sm: "auto" },
        }}
      >
        <Skeleton variant="rectangular" width={140} height={40} sx={{ borderRadius: 1 }} />
      </Box>
    </Box>
  );
};

export default ProfileHeaderSkeleton;

