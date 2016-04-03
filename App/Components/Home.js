import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

class Home extends Component {
  changeRoute (row){
    this.props.navigator.push({
      id: 'JoinRoom',
      name: 'JoinRoom'
    });
  }

  changeRoute2 (row){
    this.props.navigator.push({
      id: 'Lobby',
      name: 'Lobby'
    });
  }

  render () {
    return (
      <View style={styles.container}>
        <Image style={styles.header}
           source={require('./../../assets/Logo.png')}>
        </Image>
        <View style={styles.buttons}>
          <TouchableHighlight style={styles.button} onPress={e => {this.changeRoute(e)}}>
              <Text style={styles.btnText}>JOIN A ROOM</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button2} onPress={e => {this.changeRoute2(e)}}>
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
