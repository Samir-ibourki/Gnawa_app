import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client.js";

export const useArtists = () => {
  return useQuery({
    queryKey: ["artists"],
    queryFn: () => api.get("/artists").then((res) => res.data),
  });
};
