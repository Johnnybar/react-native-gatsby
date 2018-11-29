import React from 'react'
// import Layout from '../components/layout'

import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import {Link} from 'gatsby'
import {Header} from '../components/HeaderNew'
import {Hero} from '../components/Hero'
import {Menu} from '../components/Menu'
// import Footer from '../components/Footer'


//This is Home.js from the original globo react native app

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  componentDidMount () {

  }

  componentWillUnmount () {

  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inner_container}>
      <Header message='Press to log in'/>
      <Hero />
      <Menu/>
    </View>
  </View>)

  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'

  },
  inner_container:{
    width: '70%',
    height: '100%'
  }
})

export default IndexPage
