import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useContent = () => {
  return useMutation({
    mutationFn: async (newContent: {
      link: string;
      title: string;
      tags: string;
      linkText: string;
      type: string;
    }) => {
      const token = localStorage.getItem("token");

      const { data } = await api.post("/content", newContent, {
        headers: {
          authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
  });
};
