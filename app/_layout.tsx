import { Stack } from "expo-router";

export default function RootLayout() {
  return <Stack
  screenOptions={{
    headerTitleAlign:"center",
    headerTitle:"",
    headerShown:true,
    statusBarStyle:"dark",
    statusBarHidden:true,
  }
  }
  >
  <Stack.Screen name ="a" options={{}}/>
  </Stack>;
}
