import { useMutation, useQueryClient } from "@tanstack/react-query";
import { api } from "../api/client.js";
import { useBookingStore } from "../store/bookingStore.js";

export const useCreateBooking = () => {
  const queryClient = useQueryClient();
  const addBooking = useBookingStore((state) => state.addBooking);
  const setLastBooking = useBookingStore((state) => state.setLastBooking);

  return useMutation({
    mutationFn: (data) =>
      api.post("/bookings", {
        name: data.name,
        email: data.email,
        qty: data.qty || 1,
      }),
    onSuccess: (res) => {
      const booking = res.data;
      addBooking(booking);
      setLastBooking(booking);
      queryClient.invalidateQueries({ queryKey: ["bookings"] });
    },
    onError: (err) => {
      console.error("erreur reservation :", err);
    },
  });
};
