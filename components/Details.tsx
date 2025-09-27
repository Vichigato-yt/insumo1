import { View, Text } from 'react-native'
import React from 'react'
import IconButton from "@/components/ui/IconButton";
import CustomText from "@/components/ui/CustomText";
import Experience from "@/components/Experience";


const Details = () => {
  return (
    <View className='rounded-[50] bg-zinc-700 w-screen h-screen p-4'>
      <Text className='p-4 text-xl font-bold'>Skill</Text>
        <View className='justify-center flex-row gap-4 p-4'>
        <IconButton Icon='logo-javascript' color="orange" tam={50}></IconButton>
        <IconButton Icon='logo-github' color="black" tam={50}></IconButton>
        <IconButton Icon='logo-react' color="blue" tam={50}></IconButton>
        <IconButton Icon='logo-xbox' color="green" tam={50}></IconButton>
        </View>
      <CustomText variant="semitext" value="Profession"></CustomText>
      <CustomText variant="normal" value="Estudiante UETS"></CustomText>      
      <Experience></Experience>
    </View>

  )
}

export default Details