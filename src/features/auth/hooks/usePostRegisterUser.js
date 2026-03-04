import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (userDetails) => {
      const response = await axios.post("/api/auth/register", userDetails);
      return response.data;
    },
  });
};
