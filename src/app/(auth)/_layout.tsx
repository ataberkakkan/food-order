import { useAuth } from "@/src/providers/AuthProvider";
import { Redirect, Stack } from "expo-router";

const Layout = () => {
  const { session } = useAuth();

  if (session) {
    return <Redirect href={"/"} />;
  }

  return <Stack />;
};
export default Layout;
