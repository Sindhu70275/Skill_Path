import { useQuery } from "@tanstack/react-query";
import axios from "../../api/axios";

const fetchDashboardSkills = async () => {
  const response = await axios.get("/api/dashboard");
  return response.data.data;
};

export const useDashboardSkills = () => {
  return useQuery({
    queryKey: ["dashboardSkills"],
    queryFn: () => fetchDashboardSkills(),
  });
};
