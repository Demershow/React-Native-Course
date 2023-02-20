import React, {Component} from 'react';
import { View, Text, TouchableOpacity , Image, StyleSheet } from 'react-native';


export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      textFrase: 'Frase',
      img: require('./assets/biscoito.png'),
    }

    this.frases = [
      'Espernça é a primeira que morre',
      'O que está ruim, sempre pode piorar',
      'Você nunca está sozinha, sempre tem alguem te observando',
      'A vida é uma caixinha de surpresas',
      'Olha eu sem boné, olha eu com boné',
      'Com quantos paus se faz uma canoa? eu sei que o titanic foi feito com o meu'
    ]
    this.quebraBiscoito = this.quebraBiscoito.bind(this);

  }

  quebraBiscoito(){
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length)
    this.setState({
      textFrase: '"' + this.frases[numeroAleatorio] + '"',
      img: require('./assets/biscoitoAberto.png')
    })
  }

  render(){
    return(
      <View style={styles.container}>
        <Image style={styles.img} source={this.state.img}  />
        <Text style={styles.textoFrase}>{this.state.textFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebraBiscoito}>
          <View style={styles.btnArea}>
            <Text styles={styles.btnTexto}>Quebrar biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textoFrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 230,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
     flex: 1,
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})


