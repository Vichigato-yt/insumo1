import { Pressable, Alert } from 'react-native'
import React, { ReactNode } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps {
    Icon: string; //Nombre del Icono
    Presionar?: () => void; //Funcion que se ejecuta al presoinar el boton
    color?:string //Color del icono (opcional)
}

const IconButton = ({Icon, Presionar}: IconButtonProps) =>{
    return (
      <Pressable onPress={Presionar}>
        <Ionicons 
          name={Icon as any} 
          size={24} 
          color="black"
        />
      </Pressable>
    )
  }

export default IconButton