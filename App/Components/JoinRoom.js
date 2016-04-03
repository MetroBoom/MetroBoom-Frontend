import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

class JoinRoom extends Component {
  changeRoute (row){
    this.props.navigator.push({
      id: 'Home',
      name: 'Home'
    });
  }

  changeRoute2 (row){
    this.props.navigator.push({
      id: 'Lobby',
      name: 'Lobby'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Join Room</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
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
    fontSize: 25,
    textAlign: 'center',
    justifyContent: 'center',
    backgroundColor: '#9238e1',
    color: '#fff'
  },
  button2: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#b161fc',
    color: '#fff'
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

export default JoinRoom;
