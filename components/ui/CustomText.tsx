import { View, Text } from 'react-native'
import React from 'react'

interface CustomTextProps {
    value:string;
    variant: "normal"|"subtitle"|"title"|"purple";
}

const CustomText = ({value="hola",variant="normal"}:CustomTextProps) => {
  return (
    <View>
      <Text className={selectVariant(variant)}>{value}</Text>
    </View>
  )
}

export default CustomText

function selectVariant(variant:string):string{
    switch(variant){
        case "normal":
            return "text-black font-normal";
        case "subtitle":
            return "text-gray-400 font-normal text-xl";
        case "title":
            return "text-black font-bold text-2xl";
        case "purple":
            return "text-purple-500 font-bold text-2xl";
        default:
            return "text-black font-normal";
    }
    }