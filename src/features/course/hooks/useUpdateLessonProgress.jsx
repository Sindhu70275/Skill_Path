import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useLessonProgress = () => {
  return useMutation({
    mutationFn: async ({ lessonId, skillId, progressPercentage, lastWatchedSecond }) => {
      const response = await axios.put(`/api/progress/${skillId}/lesson/${lessonId}`, {
        progressPercentage,
        lastWatchedSecond,
      });
      return response.data;
    },
  });
};
