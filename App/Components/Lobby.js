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
        <View style={styles.info}>
          <Text style={styles.name}>Song Name</Text>
          <Text style={styles.artist}>Artist</Text>
          <Text style={styles.album}>Album</Text>
        </View>
        <TouchableHighlight>
          <Image style={styles.arrows}
                 source={require('./../../assets/UpVote.png')}
          >
          </Image>
        </TouchableHighlight>
        <TouchableHighlight>
          <Image style={styles.arrows}
                 source={require('./../../assets/DownVote.png')}
          >
          </Image>
        </TouchableHighlight>
      </View>
    );
  },

  renderFooter: function () {
    <View style={styles.footer}>
      <TouchableHighlight>
        <Image style={styles.play}
               source={require('./../../assets/Play.png')}
        >
      </Image>
      </TouchableHighlight>
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
  arrows: {
    flex: 1,
    alignItems: 'flex-end',
    flexDirection: 'row',
    alignSelf: 'flex-end',
    height: 80,
    width: 80,
    marginTop: 18,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  play:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    height: 80,
    width: 80,
    marginTop: 18,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
  },
  header: {
    flex: 1.5,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  },
  name: {
    fontSize: 18,
    color: '#000'
  },
  artist: {
    fontSize: 12,
    color: '#000'
  },
  album: {
    fontSize: 12,
    color: '#000'
  },
  row:{
    borderWidth: 1,
    borderColor: '#DDD',
    flexDirection: 'row'
  },
  info: {
    flex: 3,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    padding: 20,
  },
  footer: {
    flex: 1.5,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  },

  player: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  }
});

export default Lobby;
