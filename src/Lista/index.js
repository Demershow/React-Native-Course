import React, { Component } from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class Lista extends Component{

  constructor(props){
    super(props);
    this.state = { 
      feed: this.props.data
    };

    this.showLikes = this.showLikes.bind(this)
    this.like = this.like.bind(this)
    this.likedIcon = this.likedIcon.bind(this)
  }

  showLikes(likers){
    let feed = this.state.feed

    if(feed.likers <= 0){
      return ;
    }

    return (
      <Text style={styles.likes}>
        {feed.likers} {feed.likers > 1 ? 'curtidas' : 'curtida'}
      </Text>
    )
  }

  like(){
    let feed = this.state.feed

    if (feed.likeada === true) {
      this.setState({
        feed: {
          ...feed,
          likeada: false,
          likers: feed.likers - 1
        }
      })
    } else {
      this.setState({
        feed: {
          ...feed,
          likeada: true,
          likers: feed.likers +1
        }
      })
    }
  }

  likedIcon(likeada) {
    return likeada ? require('../img/likeada.png') : require('../img/like.png')
  }

  render(){
    return(
      <View style={styles.feedArea}>
        <View style={styles.profileView}>
          <Image 
          resizeMode='cover'
          source={{uri: this.state.feed.imgperfil}}
          style={styles.profilePicture}
          />

          <Text style={styles.profileName}>
            {this.state.feed.nome}
          </Text>
        </View>
        <Image 
          style={styles.feedPicture}
          source={{uri: this.state.feed.imgPublicacao}}
        />
        <View style={styles.btnArea}>
          <TouchableOpacity
          onPress={() => this.like()}
          >
            <Image 
            source={this.likedIcon(this.state.feed.likeada)}
            style={styles.likeIcon}
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnSend}>
            <Image 
            source={require('../img/send.png')}
            style={styles.likeIcon}
            />
          </TouchableOpacity>
        </View>

        {this.showLikes(this.state.feed.likers)}

        <View style={styles.footerView}>
          <Text style={styles.footer}>
            {this.state.feed.nome}
          </Text>
          <Text style={styles.descFooter}>
            {this.state.feed.descricao}
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  feedArea: { 

  },
  profileName: {
    fontSize: 22,
    textAlign: 'left',
    color: '#000'
  },
  profilePicture: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10
  },
  feedPicture: {
    flex: 1,
    height: 400,
    alignItems: 'center'
  },
  profileView: {
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
    padding: 8,
  },
  btnArea: {
    flexDirection: 'row',
    padding: 5
  },
  likeIcon: {
    width: 33,
    height: 33
  },
  btnSend: {
    paddingLeft: 5
  },
  footerView: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  descFooter: {
    paddingLeft: 5,
    fontSize: 15,
    color: '#000'
  },
  footer: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    paddingLeft: 5
  },
  likes: {
    fontWeight: 'bold',
    marginLeft: 5
  }
})

export default Lista;