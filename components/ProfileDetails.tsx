import "@/global.css"
import IconButton from "@/components/ui/IconButton";
import React from 'react'
import { Image, Text, View, Alert } from 'react-native'
import CustomText from "@/components/ui/CustomText";

const ProfileDetails = () => {
  return (
    <View className='items-center'>
        <Text className="text-3xl mb-3">Profile Details</Text>
        <Image
            source={require('@/assets/images/Profilephoto.jpg')}
            className="h-40 w-40 rounded-full"
        />

        <CustomText variant="title" value="Vicente Mendieta"></CustomText>
        <CustomText variant="subtitle" value="Gamer e Informatico"></CustomText>
        <CustomText variant="subtitle" value="Tercero E1"></CustomText>

        <IconButton Icon='logo-instagram'></IconButton>
        <IconButton Icon='logo-steam'></IconButton>
        <IconButton Icon='logo-xbox'></IconButton>
        <IconButton Icon='logo-x'></IconButton>
  </View>
  )
}
const avisarAlerta = (mensaje:string) => {
  Alert.alert(mensaje);
}
export default ProfileDetails