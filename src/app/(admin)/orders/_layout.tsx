import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Orders" }} />
      <Stack.Screen name="list" options={{ headerShown: false }} />
    </Stack>
  );
};
export default Layout;
