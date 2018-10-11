import React from 'react';
import {  StyleSheet,  Text,  View,  Image, TextInput, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation'; // Version can be specified in package.json

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image 
        style={{width:100,height:100}}
        source={require('./1.png')} />
        <TextInput
        style = {styles.inputBox}
        placeholder="Telepon or Email"
        />
        <TextInput
        style = {styles.inputBox}
        placeholder="Password"
        secureTextEntry={true}
        />
        <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Details')}>
          <Text style={styles.buttonText} > Enter </Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text>Forget the password?</Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
  },

  inputBox:{
    width: 250,
    fontSize: 13,
    color: '#000000'
  },

  button:{
    width: 250,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B5998',
    marginVertical: 10,
    paddingHorizontal: 80
  },

  buttonText:{
    fontSize:13,
    color:'#f7f7f7'
  },
  welcome: {
    fontSize: 18,
    textAlign: 'center',
    margin: 5,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  gambar: {
    marginTop: 20,
    height: 200,
    width: 200,
  }
})

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      	<Text style={styles.welcome}> Welcome the new account </Text>
        <Text>==============================</Text>
        <Text style={styles.welcome}>Nama : Ajeng S</Text>
        <Text style={styles.welcome}>Kelas : XI RPL 1</Text>
        <Text style={styles.welcome}>Absen : 04</Text>
        <Text>==============================</Text>
        <Image source={require('./2.jpg')} style={styles.gambar}/>
      </View>
    );
  }
}

const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    initialRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack />;
  }
}