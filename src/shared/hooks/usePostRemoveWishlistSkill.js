import axios from "../../api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useRemoveWishlistSkill = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (skillId) => {
      const response = await axios.delete(`/api/wishlist/${skillId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["dashboardSkills"]);
    },
  });
};
