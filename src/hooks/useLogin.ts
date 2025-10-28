import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (User: { email: string; password: string }) => {
      const { data } = await api.post("/login", User);
      return data;
    },
  });
};
