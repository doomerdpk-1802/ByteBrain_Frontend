import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useContent = () => {
  return useMutation({
    mutationFn: async (newContent: {
      link: string;
      type: string;
      title: string;
      tags: string;
    }) => {
      const token = localStorage.getItem("token");

      const { data } = await api.post("/content", newContent, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
  });
};
