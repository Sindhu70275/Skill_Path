import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (loginDetails) => {
      const response = await axios.post("/login", loginDetails);
      return response.data;
    },
  });
};
