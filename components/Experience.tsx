import { View, Text } from 'react-native'
import React from 'react'
import CustomText from "@/components/ui/CustomText";

const Experience = () => {
  return (
    <View className='bg-orange-400 rounded-[50] flex-row p-4'>
      <View>
      <CustomText variant='etitle' value='Experience'></CustomText>
      <CustomText variant='enormal' value='Frontend Developer'></CustomText>
      </View>
      <View>
        <CustomText variant='enormal' value='2022-2023'></CustomText>  
      </View>  
    </View>
  )
}

export default Experience