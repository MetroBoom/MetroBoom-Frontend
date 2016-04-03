import React, {
  Component,
  StyleSheet,
  Image,
  Text,
  TextInput,
  Navigator,
  TouchableHighlight,
  View
} from 'react-native';

class JoinRoom extends Component {
  changeRoute (row){
    this.props.navigator.push({
      id: 'Home',
      name: 'Home'
    });
  }

  changeRoute2 (row){
    this.props.navigator.push({
      id: 'Lobby',
      name: 'Lobby'
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>LETS MAKE THE ROOM BOOM</Text>
        <View style={styles.form}>
          <Text style={styles.formText}>INPUT ROOM CODE</Text>
          <TextInput style={styles.Input}
                     onChangeText={(text) => this.setState({text})}
                     underlineColorAndroid='#fff'
                     placeholder='GAY420'
                     placeholderTextColor="#fff"
         />
         <TextInput style={styles.Input}
                    onChangeText={(text) => this.setState({text})}
                    underlineColorAndroid='#fff'
                    placeholder='JohnyDoe'
                    placeholderTextColor="#fff"
        />
         <TouchableHighlight style={styles.button} onPress={e => {this.changeRoute2(e)}}>
             <Text style={styles.btnText}>JOIN</Text>
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
  },
  header: {
    flex: 3,
    textAlign: 'center',
    alignSelf:'center',
    fontSize: 60,
    fontWeight: 'bold',
    flexDirection: 'row',
    color: '#fff',
    backgroundColor: '#ffd200'
  },
  form: {
    flex: 3,
    backgroundColor: '#b161fc'
  },
  Input:{
    color: '#fff',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
    justifyContent: 'center'
  },
  formText: {
    flex: 1,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  button: {
    flex: 1,
    backgroundColor: '#9139e3',
  },
  btnText: {
    fontSize: 22,
    marginTop: 8,
    textAlign: 'center',
    color: '#fff'
  }
});

export default JoinRoom;
