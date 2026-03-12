import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useLessonComplete = () => {
  return useMutation({
    mutationFn: async ({ lessonId }) => {
      const response = await axios.put(
        `/api/progress/lesson/${lessonId}/complete`,
      );
      return response.data;
    },
  });
};
