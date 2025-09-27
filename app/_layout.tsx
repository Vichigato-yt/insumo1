import { Stack } from "expo-router";


export default function RootLayout() {
  return <Stack
  screenOptions={{
    headerStyle:{
      backgroundColor:"black",
    },
    headerTitleStyle:{
      color:"white",
    },
    headerTitleAlign:"center",
    headerTitle:"Profile Details",
  }
  }
  >
  <Stack.Screen name ="a" options={{}}/>
  </Stack>;
}
