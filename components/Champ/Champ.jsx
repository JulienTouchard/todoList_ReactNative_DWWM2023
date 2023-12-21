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
    value={todoListContext.saisie}
    placeholder='Nouvel Item'></TextInput>
  )
}

export default Champ