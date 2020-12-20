import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
      <View style={styles.screen}>
        <View style={styles.inputContainer}>
          <TextInput placeholder={'Enter your next goal:'} style={}/>
          <Button title={'Add'}/>
        </View>
        <View>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding: 50
  },
  inputContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input:{
    borderColor: 'black',
    borderWidth:1,
    padding: 10,
    flexGrow: 3
  }
});
