import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
      <View>
        <View style={{padding: 50}}>
          <TextInput placeholder={'Enter your next goal:'} style={{borderColor: 'black', borderWidth:1, padding: 10}}/>
          <Button title={'Add'}/>
        </View>
        <View>

        </View>
      </View>
  );
}

const styles = StyleSheet.create({
});
