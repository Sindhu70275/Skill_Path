import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateWeeklyGoal = () => {
  return useMutation({
    mutationFn: async (weeklyGoal) => {
      const response = await axios.put("/api/userStats/goal", { weeklyGoal });
      return response.data;
    },
  });
};
