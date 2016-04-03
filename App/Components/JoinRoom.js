import React, {
  Alert,
  Component,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Navigator,
  TouchableHighlight,
  View,
  AsyncStorage
} from 'react-native';

import {socket} from '../socket.js';

class JoinRoom extends Component {

  constructor (props) {
    super(props);
    this.state = {
      username: "",
      roomCode: ""
    };
  }

  goToHome (row){
    this.props.navigator.push({
      id: 'Home',
      name: 'Home'
    });
  }

  goToLobby (row){
    if (typeof this.state.roomCode !== "string" ||
        typeof this.state.username !== "string" ||
        this.state.roomCode.length === 0 ||
        this.state.username.length === 0) {
      Alert.alert(
        'Invalid roomCode and username',
        'You provided an invalid roomCode and/or username');
    }
    else {
        var _this = this;

        socket.emit("joinRoom", {
          roomName: this.state.roomCode,
          username: this.state.username
        }, function (data) {
          if (typeof data === "object" &&
              data.hasOwnProperty('error')) {
            Alert.alert('Error', data.error);
            return;
          } else {
            AsyncStorage.setItem("username", _this.state.username)
              .then(function () {
                AsyncStorage.setItem("roomCode", _this.state.roomCode);
              })
              .then(function () {
                _this.props.navigator.push({
                  id: 'Lobby',
                  name: 'Lobby'
                });
              })
              .done();
          }
        });
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>LETS MAKE THE ROOM BOOM</Text>
        <View style={styles.form}>
          <Text style={styles.formText}>INPUT ROOM CODE</Text>
          <TextInput style={styles.Input}
                     onChangeText={(roomCode) => this.setState({roomCode})}
                     underlineColorAndroid='#fff'
                     placeholder='What is the Room #?'
                     placeholderTextColor="#eee"
         />
         <TextInput style={styles.Input}
                    onChangeText={(username) => this.setState({username})}
                    underlineColorAndroid='#fff'
                    placeholder='Provide a username'
                    placeholderTextColor="#eee"
        />
         <TouchableHighlight style={styles.button} onPress={e => {this.goToLobby(e)}}>
             <Text style={styles.btnText}>JOIN</Text>
         </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={e => {this.goToHome(e)}}>
             <Text style={styles.btnText}>GO HOME</Text>
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
  },
  header: {
    flex: 2,
    textAlign: 'center',
    alignSelf:'center',
    fontSize: 60,
    fontWeight: 'bold',
    flexDirection: 'row',
    color: '#fff',
    backgroundColor: '#ffd200'
  },
  form: {
    flex: 3,
    backgroundColor: '#b161fc'
  },
  Input:{
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
  formText: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  button: {
    flex: 1,
    backgroundColor: '#9139e3',
  },
  btnText: {
    fontSize: 22,
    marginTop: 10,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff'
  }
});

export default JoinRoom;
