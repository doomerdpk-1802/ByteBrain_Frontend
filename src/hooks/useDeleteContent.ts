import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useDeleteContent = () => {
  return useMutation({
    mutationFn: async (newContent: { contentId: string }) => {
      const token = localStorage.getItem("token");

      const { data } = await api.put("/delete-content", newContent, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
  });
};
