import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useShare = () => {
  return useMutation({
    mutationFn: async (content: { contentId: string; share: boolean }) => {
      const token = localStorage.getItem("token");
      const { data } = await api.post("/share", content, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      return data;
    },
  });
};
