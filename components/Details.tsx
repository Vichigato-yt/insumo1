import { View, Text } from 'react-native'
import React from 'react'
import IconButton from "@/components/ui/IconButton";


const Details = () => {
  return (
    <View className='rounded-[50] bg-zinc-700 w-screen h-screen p-4'>
      <Text className='p-4 text-xl font-bold'>Skill</Text>
        <View className='items-center flex-row gap-4 p-4'>
        <IconButton Icon='logo-javascript' color="orange" tam={50}></IconButton>
        <IconButton Icon='logo-github' color="black" tam={50}></IconButton>
        <IconButton Icon='logo-react' color="blue" tam={50}></IconButton>
        <IconButton Icon='logo-xbox' color="green" tam={50}></IconButton>
        </View>
      <Text className='p-4 text-xl font-bold'>Profession</Text>
      <Text className=' p-4 text-xl font-bold text-center'>Estudiante UETS</Text>
    </View>

  )
}

export default Details