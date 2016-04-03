import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  Navigator,
  TouchableHighlight,
  View,
  ScrollView
} from 'react-native';


var Lobby  = React.createClass({
  getInitialState: function () {
    return {
     songs: [
       {
         name: 'Alright',
         artist: 'Kendrick Lamar',
         album: 'To Pimp A Butterfly'
       },
       {
         name: 'Nas is Like',
         artist: 'Nas',
         album: 'It was Written'
       },
       {
         name: 'Izzo',
         artist: 'Jay-Z',
         album: 'The Blueprint'
       },
       {
         name: 'Joey BadA$$',
         artist: 'Christ Conscience',
         album: 'B4.Da.BadA$$'
       },
       {
         name: 'Curren$y',
         artist: 'Winning',
         album: 'Cathedral'
       },
       {
         name: 'Da Mob',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2'
       },
       {
         name: 'Hustla Music',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2'
       }
     ]
    };
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
    var songsList = this.state.songs.map((song, key) => {
      return (
        <View style={styles.row}
              key={key}>
          <View style={styles.info}>
            <Text style={styles.name}>{song.name}</Text>
            <Text style={styles.artist}>{song.artist}</Text>
            <Text style={styles.album}>{song.album}</Text>
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
    });

    return (
      <View>
        <View style={styles.header}>
          <Text style={styles.text}>ROOM CODE: GAY420</Text>
          <TouchableHighlight style={styles.button} onPress={e => {this.changeRoute2(e)}}>
            <Text style={styles.text2}>+</Text>
          </TouchableHighlight>
        </View>
        <ScrollView style={styles.container}
                    onResponderMove={()=>{console.log('outer responding');}}
                    scrollEnabled={true}>
          {songsList}
        </ScrollView>
        <View style={styles.footer}>
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
    flex: 1,
    height: 40,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  },

  player: {
    flex: .2,
    flexDirection: 'row',
    backgroundColor: '#c72a7e'
  }
});

export default Lobby;
