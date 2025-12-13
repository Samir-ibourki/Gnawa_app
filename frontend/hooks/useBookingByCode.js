import { useQuery } from "@tanstack/react-query";
import { api } from "../api/client.js";

export const useBookingByCode = (code) => {
  return useQuery({
    queryKey: ["booking", code],
    queryFn: () => api.get(`/bookings/${code}`).then((res) => res.data),
    enabled: !!code,
  });
};
