import { View } from 'react-native'
import React from 'react'
import CustomText from "@/components/ui/CustomText";

const Experience = () => {
  return (
    <View className='bg-orange-400 rounded-[50] flex-row p-4'>
      <View>
      <CustomText variant='etitle' value='Informática'></CustomText>
      <CustomText variant='enormal' value='Tercero de Bachillerato'></CustomText>
      </View>
      <View>
        <CustomText variant='enormal' value='Promo 25-26'></CustomText>  
      </View>  
    </View>
  )
}

export default Experience