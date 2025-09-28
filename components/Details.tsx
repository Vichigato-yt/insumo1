import { View, Text } from 'react-native'
import React from 'react'
import IconButton from "@/components/ui/IconButton";
import CustomText from "@/components/ui/CustomText";
import Experience from "@/components/Experience";


const Details = () => {
  return (
    <View className='rounded-[50] bg-zinc-700 w-screen p-4'>
      <CustomText variant="semitext" value="Skill"></CustomText>
      <View className='justify-center flex-row gap-4 p-4'>
        <IconButton Icon='logo-javascript' color="orange" tam={40}></IconButton>
        <IconButton Icon='logo-github' color="black" tam={40}></IconButton>
        <IconButton Icon='logo-react' color="blue" tam={40}></IconButton>
        <IconButton Icon='logo-xbox' color="green" tam={40}></IconButton>
        </View>
      <CustomText variant="semitext" value="Profession"></CustomText>
      <CustomText variant="purple" value="Estudiante UETS"></CustomText>   
      <CustomText variant="semitext" value="Experience"></CustomText>
      <Experience></Experience>
    </View>

  )
}

export default Details