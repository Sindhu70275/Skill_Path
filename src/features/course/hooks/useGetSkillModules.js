import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchModules = async (skillId) => {
  const { data } = await axios.get(`/api/modules/skill/${skillId}`);
  return data.data;
};

export const useSkillModules = (skillId) => {
  return useQuery({
    queryKey: ["courseModules", skillId],
    queryFn: () => fetchModules(skillId),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: !!skillId,
  });
};
