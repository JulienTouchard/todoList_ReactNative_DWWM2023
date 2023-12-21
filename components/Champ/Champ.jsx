import React from 'react'
import { TextInput } from 'react-native'
import TodoListContext from '../../TodoListContext'

const Champ = () => {
  const todoListContext = React.useContext(TodoListContext)
  return (
    
    <TextInput
    onChangeText={(text)=>{
      todoListContext.setSaisie(text)
    }}

    placeholder='Nouvel Item'></TextInput>
  )
}

export default Champ