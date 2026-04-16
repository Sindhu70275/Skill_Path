import axios from "../../../api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useUpdateWeeklyGoal = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (weeklyGoal) => {
      const response = await axios.put("/api/userStats/goal", { weeklyGoal });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["userStats"]);
    },
  });
};
