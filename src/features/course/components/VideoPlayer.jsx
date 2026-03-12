import ReactPlayer from "react-player";

import Box from "@mui/material/Box";
import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

import { useLessonById } from "../hooks/useGetLessonById";

const VideoPlayer = ({ lessonId }) => {
  const { data, isLoading } = useLessonById(lessonId);

  if (isLoading) return <VideoPlayerSkeleton />;

  return (
    <Box sx={{ width: "100%", aspectRatio: "16/9" }}>
      <ReactPlayer src={data?.videoUrl} width="100%" height="100%" controls />
    </Box>
  );
};

export default VideoPlayer;
