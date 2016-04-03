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

var UserMusic  = React.createClass({
  getInitialState: function () {
    return {
     userSongs: [
       {
         name: 'Alright',
         artist: 'Kendrick Lamar',
         album: 'To Pimp A Butterfly',
         isLoading: true
       },
       {
         name: 'Nas is Like',
         artist: 'Nas',
         album: 'It was Written',
         isLoading: false
       },
       {
         name: 'Izzo',
         artist: 'Jay-Z',
         album: 'The Blueprint',
         isLoading: false
       },
       {
         name: 'Joey BadA$$',
         artist: 'Christ Conscience',
         album: 'B4.Da.BadA$$',
         isLoading: false
       },
       {
         name: 'Curren$y',
         artist: 'Winning',
         album: 'Cathedral',
         isLoading: false
       },
       {
         name: 'Da Mob',
         artist: 'Li\'l Wayne',
         album: 'Tha Carter 2',
         isLoading: false
       },
       {
         name: 'Hustla Music',
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

  render: function () {
    var songsList = this.state.userSongs.map((song, key) => {

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
