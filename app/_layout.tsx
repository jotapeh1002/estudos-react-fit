import { Stack } from 'expo-router';

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: '(tabs)',
};

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="exibirDados/[ExibirDados]" options={{ presentation: 'modal' }} />
      {/* <Stack.Screen name="modal1" options={{ presentation: 'modal',headerShown:false }} /> */}
    </Stack>
  );
}
