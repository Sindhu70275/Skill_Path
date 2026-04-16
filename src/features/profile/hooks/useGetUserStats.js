import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchUserStats = async () => {
  const response = await axios.get("/api/userStats");
  return response.data.data;
};

export const useGetUserStats = () => {
  return useQuery({
    queryKey: ["userStats"],
    queryFn: fetchUserStats,
  });
};
