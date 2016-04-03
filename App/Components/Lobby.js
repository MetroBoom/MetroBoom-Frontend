import React, {
  AsyncStorage,
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

import {socket} from '../socket.js';
var AudioPlayer = require('react-native-audioplayer');

var ProgressBar = require('ProgressBarAndroid');

var Lobby  = React.createClass({

  getInitialState: function () {
    return {
     roomCode: "",
     songs: [],
      isPlaying: false
    };
  },

  getMusicListing: function () {
    var _this = this;
    socket.emit("musicListing", function (musicList) {
        console.log(musicList);
        var musicListMapped = musicList.map(function (musicObj) {
            return {
              id: musicObj.id,
              name: musicObj.musicName,
              torrentLink: musicObj.torrentLink,
              username: musicObj.username,
              voteCount: musicObj.voteCount,
              isLoading: false
            };
        });
      console.log(musicList);
      _this.setState(musicListMapped);
    })
  },

  componentDidMount: function () {
    var _this = this;
    
    socket.on('musicList', function (list) {
      if (list.length === 0) {
        return;
      }
      var current = list[0].musicName + '.mp3';
      if (_this.state.isPlaying === false) {
        AudioPlayer.play(current);
        _this.setState({isPlaying: true});
      }
      
      _this.setState({songs: list});
    });
    
    AsyncStorage
      .getItem("roomCode")
      .then(function (roomCode) {
        _this.setState({roomCode: roomCode});
      });

    _this.getMusicListing();
  },

  addMusic: function (row){
    this.props.navigator.push({
      id: 'UserMusic',
      name: 'UserMusic'
    });
  },

  render: function () {
    var songsList = this.state.songs.map((song, key) => {
      var progress;
      if (song.isLoading) {
        progress = <ProgressBar color="rgb(153,0,255)" styleAttr="Normal" />;
      }

      var playing;
      var activeSong;
      if(song.name === 'Izzo'){
        activeSong = song;
      }

      if(activeSong === song) {
        playing = <ProgressBar color="rgb(153,0,255)" styleAttr="Horizontal" />;
      }

      return (
        <View style={styles.row}
              key={key}>
          <View style={styles.info}>
            <Text style={styles.name}>{song.name}</Text>
            <Text style={styles.artist}>{song.username}</Text>
            <Text style={styles.album}>{song.voteCount}</Text>
            <Text style={styles.album}>{song.torrentLink}</Text>
            {playing}
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
          <View style={styles.progressbar}>{progress}</View>
          <StatusBar
            backgroundColor="rgb(153,0,255)"
            barStyle="light-content"
          />
        </View>
      );
    });

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.text}>ROOM CODE: {this.state.roomCode}</Text>
          <TouchableHighlight style={styles.button} onPress={e => {this.addMusic(e)}}>
            <Text style={styles.text2}>+</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.scrollContainer}
                    onResponderMove={()=>{console.log('outer responding');}}
                    scrollEnabled={true}>
          {songsList}
        </ScrollView>
        <View style={styles.footer}>
          <View style={styles.activeSong}>
            <View style={styles.activeInfo}>
              <Text style={styles.name}>Current Song</Text>
              <Text style={styles.artist}>Current Artist</Text>
              <Text style={styles.album}>Current Album</Text>
            </View>
          </View>
          <TouchableHighlight style={styles.playContain}>
            <Image style={styles.play}
                   source={require('./../../assets/Play.png')}
            >
          </Image>
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
    textAlign: 'left',
    marginLeft: 10,
    marginTop: 6
  },
  text2: {
    color: '#fff',
    fontSize: 28,
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
  playContain:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  play:{
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 80,
    width: 80,
    marginTop: 10,
    marginBottom: 10,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center'
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
  activeSong: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#000',
    alignItems: 'center'
  },
  activeInfo: {
    flex: 3,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    paddingLeft: 20
  },
  info: {
    flex: 3,
    alignItems: 'flex-start',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    padding: 20,
  },
  footer: {
    flex: 6,
    height: 50,
    flexDirection: 'column',
    backgroundColor: '#c72a7e'
  },

  player: {
    flex: .2,
    alignSelf: 'flex-end',
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  },

  progressbar: {
    flex: 1,
    alignSelf: 'center'
  }
});

export default Lobby;
