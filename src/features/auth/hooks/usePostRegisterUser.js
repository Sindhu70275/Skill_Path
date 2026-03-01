import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useRegisterUser = () => {
  return useMutation({
    mutationFn: async (userDetails) => {
      const response = await axios.post("/register", userDetails);
      return response;
    },
  });
};
