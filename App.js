import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';


export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      nome: 'matheus'
    };

    this.entrar = this.entrar.bind(this)

  }

  entrar(nome) {
    this.setState({
      nome
    })
  }

  render(){

    let nome = 'Demerson'

    return(
      <View style={{marginTop: 20}}>
        <Button 
          title='Next'
          onPress={() => this.entrar('Julio')}
        />
        <Text style={{fontSize: 20, textAlign: 'center'}}>
          {this.state.nome}
        </Text>
      </View>
    )
  }
}


