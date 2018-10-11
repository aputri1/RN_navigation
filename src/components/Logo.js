import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';

export default class Logo extends Component<{}> {
	render() {
		return (
			<View style={styles.container}>
			<Image style={{width:250, height: 250}}
        source={require('../images/1.png')}
        />
        <Text style={styles.logoText}>Welcome to My app</Text>
			</View>
		)
	}
}
const styles = StyleSheet.create({
container : {
  flexGrow: 1,
  justifyContent:'flex-end',
  alignItems:'center'
},
logoText : {
fontSize:18,
color:'rgba(255, 255, 255, 0.7)'
}
});