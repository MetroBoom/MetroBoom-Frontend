import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View,
  ScrollView,
  StatusBar
} from 'react-native';

import {socketUrl} from '../config.js';

var io = require('socket.io-client/socket.io') ,
    socket = io(socketUrl, {
      transports: ['websocket']
    });

var UserMusic  = React.createClass({
  getInitialState: function () {
    return {
     userSongs: [
       {
         name: 'dejavu',
         artist: 'Kendrick Lamar',
         album: 'To Pimp A Butterfly',
         isLoading: true
       },
       {
         name: 'londonbridge',
         artist: 'Nas',
         album: 'It was Written',
         isLoading: false
       },
       {
         name: 'marsoc',
         artist: 'Jay-Z',
         album: 'The Blueprint',
         isLoading: false
       },
       {
         name: 'memoriesfaded',
         artist: 'Christ Conscience',
         album: 'B4.Da.BadA$$',
         isLoading: false
       },
       {
         name: 'minutewarning',
         artist: 'Winning',
         album: 'Cathedral',
         isLoading: false
       },
       {
         name: 'ontheway',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2',
         isLoading: false
       },
       {
         name: 'pushit',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2',
         isLoading: false
       },
       {
         name: 'selfish',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2',
         isLoading: false
       },
       {
         name: 'talkshow',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2',
         isLoading: false
       }
     ]
    };
  },

  changeRoute: function (row){
    this.props.navigator.push({
      id: 'Lobby',
      name: 'Lobby'
    });
  },

  seed: function (songData) {
      seed(songData, null, resolve);
  },

  sign: function (name) {
    return `magnet:?xt=urn:${name}&dn=&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Fopentor.org%3A2710&tr=udp%3A%2F%2Ftracker.ccc.de%3A80&tr=udp%3A%2F%2Ftracker.blackunicorn.xyz%3A6969&tr=udp%3A%2F%2Ftracker.coppersurfer.tk%3A6969&tr=udp%3A%2F%2Ftracker.leechers-paradise.org%3A6969`
  },

  onTouch: function (song) {
    socket.emit('addMusic', {
      torrentLink: this.sign(this.state.userSongs[song].name),
      musicName: this.state.userSongs[song].name
    });
  },


  render: function () {
    var songsList = this.state.userSongs.map((song, key) => {
      return (
        <TouchableHighlight onPress={this.onTouch.bind(this, key)} key={key}>
          <View style={styles.row}
                key={key}>
            <View style={styles.info} onPress={this.onTouch.bind(this, key)}>
              <Text style={styles.name}>{song.name}</Text>
              <Text style={styles.artist}>{song.artist}</Text>
              <Text style={styles.album}>{song.album}</Text>
            </View>
              <Image style={styles.play}
                     source={require('./../../assets/Selected.png')}
              >
              </Image>
            <StatusBar
              backgroundColor="rgb(153,0,255)"
              barStyle="light-content"
            />
          </View>
        </TouchableHighlight>
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>Select Songs to Add</Text>
        </View>
        <ScrollView style={styles.scrollContainer}
                    onResponderMove={()=>{console.log('outer responding');}}
                    scrollEnabled={true}>
          {songsList}
        </ScrollView>
        <View style={styles.footer}>
          <TouchableHighlight style={styles.playContain} onPress={e => {this.changeRoute(e)}}>
            <Text style={styles.textDone}>Done</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }

});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 488,
    flexDirection: 'column'
  },
  scrollContainer: {
    flex: 20
  },
  text: {
    color: '#fff',
    fontSize: 20,
    flex: 2,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 10,
    marginTop: 6
  },
  textDone: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 20
  },
  play: {
    flex: 1,
    flexDirection: 'row',
    height: 80,
    width: 80,
    marginTop: 10,
    alignItems: 'center',
    alignSelf: 'center'
  },
  header: {
    flex: 2,
    height: 50,
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
    flex: 1,
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
    flex: 3,
    height: 50,
    flexDirection: 'column',
    backgroundColor: '#c72a7e'
  }
});

export default UserMusic;
