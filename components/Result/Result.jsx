import React from 'react'
import { FlatList, Text, View } from 'react-native'
import TodoListContext from '../../TodoListContext'


export const Result = () => {
  const todoListContext = React.useContext(TodoListContext)
  return (
    <FlatList
        data={todoListContext.list}
        renderItem={({item}) =>{ 
          return(
          <View>
            <Text>{item}</Text>
          </View>
          )
        }}
        keyExtractor={item => item}
      />
    
  )
}
