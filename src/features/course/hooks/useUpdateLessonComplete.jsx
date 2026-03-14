import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useLessonComplete = () => {
  return useMutation({
    mutationFn: async ({ lessonId, skillId}) => {
      const response = await axios.put(
        `/api/progress/${skillId}/lesson/${lessonId}/complete`,
      );
      return response.data;
    },
  });
};
