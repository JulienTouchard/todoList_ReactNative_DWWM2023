
import React from 'react';

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


function App() {
  

  return (
    <SafeAreaView>
      <ScrollView
        contentInsetAdjustmentBehavior="automatic">
        <View>
          <Title></Title>
          <Champ></Champ>
          <Button
          style={styles.buttonStyle}
          title='Ajouter'></Button>
        </View>
        
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  buttonStyle:{
    fontFamily:"arial"
  }
});

export default App;
