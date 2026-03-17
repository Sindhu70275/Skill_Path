import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "../../api/axios";

export const useUnenrollSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (skillId) => {
      const response = await axios.delete(`/api/enroll/${skillId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["dashboardSkills"]);
    },
  });
};
