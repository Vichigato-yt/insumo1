import "@/global.css"
import IconButton from "@/components/ui/IconButton";
import React from 'react'
import { Image, View, Alert } from 'react-native'
import CustomText from "@/components/ui/CustomText";

const ProfileDetails = () => {
  return (
    <View className='items-center'>
        <Image
            source={require('@/assets/images/Profilephoto.jpg')}
            className="h-40 w-40 rounded-full"
        />

        <CustomText variant="title" value="Vicente Mendieta"></CustomText>
        <CustomText variant="subtitle" value="Team Fortress 2"></CustomText>

        <View className="flex-row gap-4">
          <IconButton Icon='logo-instagram' color="blue" tam={25}></IconButton>
          <IconButton Icon='logo-steam' color="black" tam={25}></IconButton>
          <IconButton Icon='logo-tiktok' color="black" tam={25}></IconButton>
          <IconButton Icon='logo-x' color="black" tam={25}></IconButton>
        </View>
    </View>
  )
}
const avisarAlerta = (mensaje:string) => {
  Alert.alert(mensaje);
}
export default ProfileDetails