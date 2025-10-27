import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useLogin = () => {
  return useMutation({
    mutationFn: async (newUser: { email: string; password: string }) => {
      const { data } = await api.post("/login", newUser);
      return data;
    },
  });
};
