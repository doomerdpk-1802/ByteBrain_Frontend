import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useUpdateContent = () => {
  return useMutation({
    mutationFn: async (newContent: {
      contentId: string;
      link: string;
      type: string;
      title: string;
      tags: string;
    }) => {
      const token = localStorage.getItem("token");

      const { data } = await api.put("/update-content", newContent, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
  });
};
