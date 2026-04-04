import axios from "../../../api/axios";
import { useMutation } from "@tanstack/react-query";

export const useUpdateProfile = () => {
  return useMutation({
    mutationFn: async (formData) => {
      const response = await axios.put("/api/profile", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    },
  });
};
