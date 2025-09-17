import { Pressable, Alert } from 'react-native'
import React, { ReactNode } from 'react'

interface IconButtonProps {
    Icon: ReactNode;
    onPress: () => void;
}

const IconButton = ({Icon, onPress}: IconButtonProps) =>{
    return (
      <Pressable onPress={onPress}>
        {Icon}
      </Pressable>
    )
  }


export default IconButton