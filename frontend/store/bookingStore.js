import { create } from "zustand";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persist } from "zustand/middleware";

export const useBookingStore = create(
  persist(
    (set) => ({
      lastBooking: null,
      bookings: [],
      setLastBooking: (booking) => set({ lastBooking: booking }),
      addBooking: (booking) =>
        set((state) => ({ bookings: [...state.bookings, booking] })),
      clearBookings: () => set({ bookings: [], lastBooking: null }),
    }),
    {
      name: "gnawa-bookings",
      getStorage: () => AsyncStorage,
    }
  )
);
