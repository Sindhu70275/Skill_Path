import Box from "@mui/material/Box";
import Skeleton from "@mui/material/Skeleton";

const VideoPlayerSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        aspectRatio: "16/9",
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <Skeleton
        variant="rectangular"
        sx={{
          width: "100%",
          height: "100%",
          bgcolor: "grey.900",
          animation: "pulse 1.5s ease-in-out infinite",
        }}
      />
    </Box>
  );
};

export default VideoPlayerSkeleton;
