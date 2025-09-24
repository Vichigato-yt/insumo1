import "@/global.css"
import IconButton from "@/components/ui/IconButton";
import React from 'react'
import { Image, Text, View, Alert } from 'react-native'

const ProfileDetails = () => {
  return (
    <View className='items-center'>
        <Text className="text-3xl mb-3">Profile Details</Text>
        <Image
            source={require('@/assets/images/Profilephoto.jpg')}
            className="h-40 w-40 rounded-full"
        />
        <Text className="text-2xl font-bold">Vicente Mendieta</Text>
        <Text className="text-xl text-gray-400 font-bold">Team Fortress 2 player</Text>
        <Text className="text-xl text-gray-400 font-bold">Informático</Text>
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