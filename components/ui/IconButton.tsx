import { Pressable, Alert } from 'react-native'
import React, { ReactNode } from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

interface IconButtonProps {
    Icon: string; //Nombre del Icono
    Presionar?: () => void; //Funcion que se ejecuta al presoinar el boton
    color?:string //Color del icono (opcional)
    tam?:number //Tamaño del icono (opcional)
}

const IconButton = ({Icon, Presionar, color, tam}: IconButtonProps) =>{
    return (
      <Pressable onPress={Presionar} className="p-2 rounded-full bg-gray-300">
        <Ionicons 
          name={Icon as any} 
          size={tam} 
          color={color}
        />
      </Pressable>
    )
  }

export default IconButton