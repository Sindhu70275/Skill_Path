import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchSkillDetails = async (id) => {
  const { data } = await axios.get(`/api/skills/${id}`);
  return data.data;
};

export const useGetSkillDetails = (id) => {
  return useQuery({
    queryKey: ["skillDetails", id],
    queryFn: () => fetchSkillDetails(id),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    enabled: !!id,
  });
};
