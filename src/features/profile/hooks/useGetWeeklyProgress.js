import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchWeeklyProgress = async () => {
  const response = await axios.get("/api/userStats/weekly-progress");
  return response.data.data;
};

export const useGetWeeklyProgress = () => {
  return useQuery({
    queryKey: ["weeklyProgress"],
    queryFn: fetchWeeklyProgress,
  });
};
