import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.headerImg}>
          Metro Boom!
        </Text>
        <Image
         style={styles.backgroundImage}
         source={require('./../../bg.png')}
        />
      <TouchableHighlight style={styles.button}onPress={this._onPressButton}>
          <Text>Join a Room</Text>
      </TouchableHighlight>
      <TouchableHighlight style={styles.button}onPress={this._onPressButton}>
          <Text>Create a Room</Text>
      </TouchableHighlight>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover'
  },

  button: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor:'rgb(153, 0, 255)',
    color: '#fff'
  },

  join:{
    backgroundColor: '#9900ff',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0.1,0,0,0.1)',
  },
  headerImg: {
    fontFamily: 'Raleway-Bold',
    flex: 2,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#9900ff'
    //margin: 10,
  },
  create: {
    fontFamily: 'Raleway-Bold',
    //flex: 1,
    fontSize: 20,
    textAlign: 'center',
    backgroundColor: '#9900ff',
    alignSelf: 'stretch',
    //marginBottom: 5,
  },
});

export default Home;
