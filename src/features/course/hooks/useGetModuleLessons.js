import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchLessons = async (moduleId) => {
  const response = await axios.get(`/api/lessons/module/${moduleId}`);
  return response.data.data;
};

export const useModuleLessons = (moduleId, enabled) => {
  return useQuery({
    queryKey: ["lessons", moduleId],
    queryFn: () => fetchLessons(moduleId),
    enabled: !!moduleId && enabled,
  });
};
