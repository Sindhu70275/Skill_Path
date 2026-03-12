import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchLessonById = async (lessonId) => {
  const response = await axios.get(`/api/lessons/${lessonId}`);
  return response.data.data;
};

export const useLessonById = (lessonId) => {
  return useQuery({
    queryKey: ["lesson", lessonId],
    queryFn: () => fetchLessonById(lessonId),
    enabled: !!lessonId,
  });
};
