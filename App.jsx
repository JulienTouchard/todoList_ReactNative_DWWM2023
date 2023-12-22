
import React, { useEffect } from 'react';

import {
  Button,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Title from './components/Title/Title';
import Champ from './components/Champ/Champ';
import { Result } from './components/Result/Result';
import TodoListContext from './TodoListContext';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
const storage = new MMKVLoader().initialize();
function App() {

  const [list, setList] = useMMKVStorage('list', storage, []);
  const [saisie,setSaisie] = React.useState("");
  const deleteItem = (index)=>{
    let listTmp = list;
    listTmp.splice(index,1);
    setList(listTmp);
  }
  const handlePress = ()=>{
    if(saisie.length>0){
      setList([...list,saisie]);
      //vider saisie;
      setSaisie("");
      //vider le champ???
    }
  }
  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <TodoListContext.Provider value={{list,setList,saisie,setSaisie,deleteItem}}>
          <View>
            <Title></Title>
            <Champ></Champ>
            <Button
              style={styles.buttonStyle}
              title='Ajouter'
              onPress={handlePress}
              ></Button>
          </View>
          <Result></Result>
          </TodoListContext.Provider>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    fontFamily: "arial"
  }
});

export default App;
