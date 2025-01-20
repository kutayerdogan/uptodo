import { Stack } from 'expo-router';

export default function AuthLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="introduction" />
      <Stack.Screen name="login" />
      <Stack.Screen name="create" />
      <Stack.Screen name="index" redirect />
    </Stack>
  );
} 