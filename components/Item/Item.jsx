import React from 'react'
import { Button, Text, View } from 'react-native'

const Item = (props) => {
    return (
        <View style={{display:'flex',flexDirection:'row',padding:5}}>
            <Text style={{width:'90%'}}>{props.item}</Text>
            <Text>{props.index}</Text>
            <Button 
            style={{width:'10%'}}
            title='X'
            />
        </View>
    )
}

export default Item