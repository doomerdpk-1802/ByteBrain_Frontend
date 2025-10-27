import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });

      return data;
    },
  });
};
