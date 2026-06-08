import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchRecentActivity = async () => {
  const response = await axios.get("/api/progress/recent");
  return response.data.data;
};

export const useGetRecentActivity = () => {
  return useQuery({
    queryKey: ["recentActivity"],
    queryFn: fetchRecentActivity,
  });
};
