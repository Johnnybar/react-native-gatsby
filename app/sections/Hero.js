import React from 'react';
import {StyleSheet, Image} from 'react-native';

export class Hero extends React.Component {

  render() {

    return (
      <Image style={styles.heroImage} source ={require('./img/Logo.png')}/>

  )
  }
}


const styles = StyleSheet.create({
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 8
}
})
