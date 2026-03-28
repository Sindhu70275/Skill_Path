import axios from "../../../api/axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export const useLessonComplete = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ lessonId, skillId }) => {
      const response = await axios.put(
        `/api/progress/${skillId}/lesson/${lessonId}/complete`,
      );
      return response.data;
    },
    onSuccess: (data, variables) => {
      queryClient.invalidateQueries({ queryKey: ["lessons"] });
      queryClient.invalidateQueries({ queryKey: ["courseModules", variables.skillId] });
    },
  });
};
