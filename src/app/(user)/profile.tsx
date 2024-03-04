import { supabase } from "@/src/lib/supabase";
import { Button } from "react-native";
import { View, Text } from "react-native";
const ProfileScreen = () => {
  return (
    <View>
      <Button title="Sign Out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
};
export default ProfileScreen;
