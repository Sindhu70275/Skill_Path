import { useQuery } from "@tanstack/react-query";
import axios from "../../../api/axios";

const fetchSkills = async (search = "", tags = "") => {
  const { data } = await axios.get("/api/skills", {
    params: { search, tags },
  });
  return data.data;
};

export const useSkills = (search = "", tags = []) => {
  const tagsString = tags.length > 0 ? tags.join(",") : "";

  return useQuery({
    queryKey: ["skills", search, tagsString],
    queryFn: () => fetchSkills(search, tagsString),
    staleTime: 1000 * 60 * 5,
    retry: 1,
    keepPreviousData: true
  });
};
