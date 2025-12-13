// hooks/useArtisteById.js
import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client.js";

export const useArtisteById = (id) => {
  return useQuery({
    queryKey: ["artist", id],
    queryFn: () => api.get(`/artists/${id}`).then((res) => res.data),
    enabled: !!id,
  });
};
