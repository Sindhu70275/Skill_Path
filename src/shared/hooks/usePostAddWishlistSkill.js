import axios from "../../api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useAddWishlistSkill = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (skillId) => {
      const response = await axios.post(`/api/wishlist/${skillId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["dashboardSkills"]);
    }
  });
};
