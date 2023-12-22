import React from 'react'
import { Button, Text, View } from 'react-native'
import TodoListContext from '../../TodoListContext'

const Item = (props) => {
    const todoListContext = React.useContext(TodoListContext)
    return (
        <View style={{display:'flex',flexDirection:'row',padding:5}}>
            
            <Text style={{width:'90%'}}>{props.item}</Text>
            <Button 
            style={{width:'10%'}}
            title='X'
            onPress={()=>{todoListContext.deleteItem(props.index)}}
            />
        </View>
    )
}

export default Item