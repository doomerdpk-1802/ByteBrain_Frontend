import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useMe = () => {
  return useQuery({
    queryKey: ["me"],
    queryFn: async () => {
      const { data } = await api.get("/me");

      console.log(data);
      return data.message;
    },
  });
};
