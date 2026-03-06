import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../../src/api/axios";

export const useEnrollSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (skillId) => {
      const response = await axios.post(`/api/enroll/${skillId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["dashboardSkills"]);
    },
  });
};
