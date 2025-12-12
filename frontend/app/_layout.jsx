import { Stack } from "expo-router";
export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="artistes" />
      <Stack.Screen name="detailsArtist" />
      <Stack.Screen name="reservation" />
      <Stack.Screen name="historique" />
    </Stack>
  );
}
