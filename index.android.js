import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Image,
  Text,
  TouchableHighlight,
  Navigator,
  View
} from 'react-native';

import Home from './App/Components/Home.js';
import JoinRoom from './App/Components/JoinRoom.js';
import Lobby from './App/Components/Lobby.js';

class Metro extends Component {
  render () {
    return (
      <Navigator initialRoute={{id: 'Home', name: 'Home'}} renderScene={this.renderScene}
        configureScene={(route) => {
          if (route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
      />
    );
  }
  renderScene (route, navigator){
    switch (route.id) {
      case 'Home':
        return (<Home navigator={navigator} />);
      case 'JoinRoom':
        return (<JoinRoom navigator={navigator} />);
      case 'Lobby':
        return (<Lobby navigator={navigator} />);

    }
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#c72a7e',
    flex: 1,
    flexDirection: 'column'
  }
});
AppRegistry.registerComponent('Metro', () => Metro);
