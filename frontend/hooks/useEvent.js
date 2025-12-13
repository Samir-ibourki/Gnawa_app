import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client.js";

export const useEvent = () => {
  return useQuery({
    queryKey: ["event"],
    queryFn: () => api.get("/event").then((res) => res.data),
  });
};
