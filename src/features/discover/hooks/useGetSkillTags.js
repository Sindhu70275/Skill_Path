import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchSkillTags = async () => {
  const { data } = await axios.get("/api/skills/tags");
  return data;
};

export const useSkillTags = () => {
  return useQuery({
    queryKey: ["tags"],
    queryFn: fetchSkillTags,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};
