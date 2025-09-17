import "@/global.css"
import React from 'react'
import { Image, Text, View } from 'react-native'
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
  </View>
  )
}

export default ProfileDetails