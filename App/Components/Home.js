import React, {
  Alert, 
  AsyncStorage, 
  Component,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

import {socket} from '../socket.js';

class Home extends Component {
  
  joinRoom (row){ 
    this.props.navigator.push({
      id: 'JoinRoom',
      name: 'JoinRoom'
    });
  }

  createRoom (row){
    var _this = this;
    
    socket.emit("createRoom", function (data) {
      if (data.hasOwnProperty("error")) {
        Alert.alert('An error occured', 'An error occured');
        return;
      }
      AsyncStorage.setItem("username", "traplord")
        .then(function () {
          return AsyncStorage.setItem("roomCode", data);
        })
        .then(function () {
          _this.props.navigator.push({
            id: 'Lobby',
            name: 'Lobby'
          });
        })
        .done();
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.header}
           source={require('./../../assets/Logo.png')}>
        </Image>
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={e => {this.joinRoom(e)}}>
              <Text style={styles.btnText}>JOIN A ROOM</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button2} onPress={e => {this.createRoom(e)}}>
              <Text style={styles.btnText}>CREATE A ROOM</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#c72a7e',
  },
  header: {
    flex: 2,
    marginTop: 100,
    height: 10,
    width: 350,
    resizeMode: 'contain',
    flexDirection: 'row'
  },
  buttons: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#9238e1',
  },
  button2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b161fc',
  },
  btnText: {
    flex: 1,
    fontSize: 25,
    marginTop: 40,
    textAlign: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    color: '#fff'
  }
});

export default Home;
