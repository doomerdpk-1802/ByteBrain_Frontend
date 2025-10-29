import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

export const useContents = () => {
  return useQuery({
    queryKey: ["contents"],
    queryFn: async () => {
      const token = localStorage.getItem("token");

      const { data } = await api.get("/contents", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      console.log(data);
      return data.message;
    },
  });
};
