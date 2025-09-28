import { Stack } from "expo-router";
import IconButton from "@/components/ui/IconButton";
export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        title: "", 
        headerLeft: () => (
          <IconButton Icon='chevron-back-sharp' color="black" tam={25}></IconButton>
        ),
        headerRight: () => (
          <IconButton Icon='ellipsis-vertical-sharp' color="black" tam={25}></IconButton>
        ),
      }}
    >
      <Stack.Screen
        name="a"
        options={{}}
      />
    </Stack>
  );
}