import ProfileDetails from "@/components/ProfileDetails";
import IconButton from "@/components/IconButton";
import "@/global.css";
import { View } from "react-native";

export default function Index() {
  return (
    <View className="flex-col bg-white w-screen h-screen items-center p-4">
      <ProfileDetails/>
      <IconButton/>
    </View>
  );
}
