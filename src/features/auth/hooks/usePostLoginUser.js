import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (loginDetails) => {
      const response = await axios.post("/api/auth/login", loginDetails, { withCredentials: true });
      return response.data;
    },
  });
};
