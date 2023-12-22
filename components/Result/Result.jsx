import React from 'react'
import { FlatList, Text, View } from 'react-native'
import TodoListContext from '../../TodoListContext'
import Item from '../Item/Item'


export const Result = () => {
  const todoListContext = React.useContext(TodoListContext)
  return (
    <FlatList
        data={todoListContext.list}
        renderItem={({item,index}) =><Item item={item} index={index}/>}
        keyExtractor={item => item}
      />
    
  )
}
