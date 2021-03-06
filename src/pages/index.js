import React from 'react'
// import Layout from '../components/layout'
import '../assets/scss/main.scss'
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
          <Header/>
          <Hero />
          <Menu/>
    </View>
  </View>)

  }
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80vw',
    margin: 'auto'

  },
  inner_container:{
    width: '100%',
    height: '100%'
  }
})

export default IndexPage
