import React, {Component} from 'react';
import { View, Text, Image } from 'react-native';


export default class App extends Component{
  render(){

    let nome = 'Demerson'

    return(
      <View>
        <Text>
          olá mundo
        </Text>
        <Text style={{ color: '#ff0000'}}>
          sujeito programador
        </Text>
        <Jobs
        Largura={200} altura={200} fulano='Steve Jobs'
         />
         <Text>
          {nome}
         </Text>
      </View>
    )
  }
}


class Jobs extends Component{
  render(){
    return(
      <View>
      <Image source={{ uri: 'https://sujeitoprogramador.com/steve.png' }} 
        style={{width: this.props.largura, height: this.props.altura}}
        />
        <Text>
          {this.props.fulano}
        </Text>
      </View>
    )
  }
}