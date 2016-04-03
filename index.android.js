import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  View
} from 'react-native';

import Home from './App/Components/Home.js';

class Metro extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Home></Home>
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

AppRegistry.registerComponent('Metro', () => Metro);
