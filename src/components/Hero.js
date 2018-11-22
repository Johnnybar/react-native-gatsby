import React from 'react';
import {StyleSheet, Image, Text, View, Platform} from 'react-native';

export class Hero extends React.Component {

  render() {

    return (
      <View style={styles.headStyle}>
      <Image style={styles.heroImage} source ={require('../assets/Logo.png')}/>
      </View>
  )
  }
}


const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    height: 600,
    backgroundColor: Platform.OS === 'android'
      ? '#31e981'
      : '#35605a',
    flex: 2,
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderColor: '#000000',

  },
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 8

}
})
