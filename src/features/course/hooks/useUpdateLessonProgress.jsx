import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useLessonProgress = () => {
  return useMutation({
    mutationFn: async ({ lessonId, progressPercentage, lastWatchedSecond }) => {
      const response = await axios.put(`/api/progress/lesson/${lessonId}`, {
        progressPercentage,
        lastWatchedSecond,
      });
      return response.data;
    },
  });
};
