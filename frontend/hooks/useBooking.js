import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/client.js";
import { useBookingStore } from "../store/bookingStore.js";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const addBooking = useBookingStore((state) => state.addBooking);
  const setLastBooking = useBookingStore((state) => state.setLastBooking);

  return useMutation({
    mutationFn: (data) => api.post("/bookings", data),
    onSuccess: (res) => {
      const booking = res.data;
      addBooking(booking);
      setLastBooking(booking);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
  });
};
