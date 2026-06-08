import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchLatestLesson = async () => {
  const response = await axios.get("/api/progress/latest-watched");
  return response.data.data;
};

export const useGetLatestLesson = () => {
  return useQuery({
    queryKey: ["latestLesson"],
    queryFn: fetchLatestLesson,
  });
};
