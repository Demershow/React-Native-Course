import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      nome: '',
      input: ''
    }

    this.insertName = this.insertName.bind(this)
  }



  insertName(){
    if(this.state.input  === ''){
      alert('Digite seu nome')
      return;
    }
    this.setState({nome: "Bem vindo: " + this.state.input})
  }

  render(){
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          placeholder="Bem vindo, digite seu nome"
          underlineColorAndroid='transparent'
          onChangeText={(txt) => this.setState({input: txt})}
        />
        <Button title='inserir nome' onPress={this.insertName} />
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


