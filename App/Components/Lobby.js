import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View,
  ListView
} from 'react-native';


var Lobby  = React.createClass({
  getInitialState: function () {
    var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    return {
     dataSource: ds.cloneWithRows(['row 1', 'row 2']),
    };
  },

  renderHeader: function () {
    return (
      <View style={styles.header}>
        <Text style={styles.text}>ROOM CODE: GAY420</Text>
        <TouchableHighlight style={styles.button} onPress={e => {this.changeRoute2(e)}}>
          <Text style={styles.text2}>+</Text>
        </TouchableHighlight>
      </View>
    );
  },

  renderRow: function () {
    return (
      <View style={styles.row}>
        <Text style={styles.name}>Song Name</Text>
        <Text style={styles.artist}>Artist</Text>
        <Text style={styles.album}>Album</Text>
      </View>
    );
  },

  renderFooter: function () {
    <View style={styles.footer}>
      <Text>PlayButton</Text>
    </View>
  },

  changeRoute: function (row){
    this.props.navigator.push({
      id: 'JoinRoom',
      name: 'JoinRoom'
    });
  },

  changeRoute2: function (row){
    this.props.navigator.push({
      id: 'Home',
      name: 'Home'
    });
  },

  render: function () {
    return (
        <ListView
          style={styles.container}
          dataSource={this.state.dataSource}
          renderRow={this.renderRow}
          renderHeader={this.renderHeader}
          renderFooter={this.renderFooter}
        />
    );
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column'
  },
  text: {
    color: '#fff',
    fontSize: 20,
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'left',
    marginLeft: 10
  },
  text2: {
    color: '#fff',
    fontSize: 22,
    flex: 1,
    fontWeight: 'bold',
    textAlign: 'right',
    marginRight: 10
  },
  header: {
    flex: 1.5,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  },
  name: {
    fontSize: 20,
    color: '#000',
    flexDirection: 'column'
  },
  artist: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'center'
  },
  album: {
    fontSize: 16,
    color: '#000',
    alignSelf: 'flex-end'
  },
  row: {
    height: 34,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#DDD'
  },
  footer: {
    flex: 1.5,
    flexDirection: 'row',
    backgroundColor: '#c72a7e',
    color: '#fff'
  },

  player: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  }
});

export default Lobby;
