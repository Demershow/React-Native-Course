import React, {Component} from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';


export default class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.text}>TEXTO 1</Text>
        <Text style={styles.text}>TEXTO 2</Text>
        <Text style={styles.text}>TEXTO 3</Text>
        <Text style={styles.text}>TEXTO 4</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    container : {
      marginTop: 20,
    },
    text: { 
      textAlign: 'center',
      fontSize: 25,
      color: 'red'
    }
})


