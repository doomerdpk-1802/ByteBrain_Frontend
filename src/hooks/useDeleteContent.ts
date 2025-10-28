import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useDeleteContent = () => {
  return useMutation({
    mutationFn: async (content: { contentId: string }) => {
      const token = localStorage.getItem("token");

      const { data } = await api.delete("/delete-content", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        data: content,
      });

      return data;
    },
  });
};
