import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router";
export default function Layout() {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="artistes" />
        <Stack.Screen name="artistes/[id]" />
        <Stack.Screen name="reservation" />
        <Stack.Screen name="historique" />
      </Stack>
    </QueryClientProvider>
  );
}
