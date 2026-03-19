import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

import { useQueryClient } from "@tanstack/react-query";

export const useLessonProgress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async ({ lessonId, skillId, progressPercentage, lastWatchedSecond }) => {
      const response = await axios.put(`/api/progress/${skillId}/lesson/${lessonId}`, {
        progressPercentage,
        lastWatchedSecond,
      });
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["courseModules"] });
    },
  });
};
