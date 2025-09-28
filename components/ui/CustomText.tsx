import { View, Text } from 'react-native'
import React from 'react'

interface CustomTextProps {
    value:string;
    variant: "normal"|"subtitle"|"title"|"purple"|"semitext"|"enormal"|"etitle";
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
            return "text-white p-4 text-xl font-bold text-center";
        case "subtitle":
            return "text-gray-400 font-normal text-l";
        case "title":
            return "text-black font-bold text-xl";
        case "purple":
            return "text-purple-500 font-bold text-xl";
        case "semitext":
            return "p-4 text-l text-white";
        case "etitle":
            return "text-white font-bold text-s p-4";
        case "enormal":
            return "text-gray-400 p-4 text-xs";
        default:
            return "text-black font-normal";
    }
    }