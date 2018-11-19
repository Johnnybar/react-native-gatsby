import React from 'react';
import {Header} from '../sections/Header.js'
import {Hero} from '../sections/Hero.js'
import {Menu} from '../sections/Menu.js'
import {StyleSheet, Text, View} from 'react-native';
import StackNavigator from 'react-navigation';

export class Home extends React.Component {
  static navigationOptions ={
    header: null
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>

      <Header navigate ={navigate} message='Press to log in'/>
      <Hero />
      <Menu navigate = { navigate }/>
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
