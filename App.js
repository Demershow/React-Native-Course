import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: ''
    }

    this.takeName = this.takeName.bind(this)
  }

  takeName(texto) {
    if (texto.length > 0) {
      this.setState({nome: 'Bem vindo: ' + texto})
    } else {
      this.setState({nome: ''})
    }
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Bem vindo, digite seu nome"
          underlineColorAndroid='transparent'
          onChangeText={this.takeName}
        />
        <Text style={styles.text}>
          {this.state.nome}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#333',
    margin: 10,
    fontSize: 20,
    padding: 10
  },
  text: {
    textAlign: 'center',
    fontSize: 25
  }
})


