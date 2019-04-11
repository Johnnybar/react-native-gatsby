import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Header} from '../components/HeaderNew'
const about = `A representation of a React Native app with native features and syntax as an online, in-browser web application, using Gatsby and React-Native-Web.
Feel free to browse and test the different features of the page, using YouTube' Data API, Wordpress's Public API, React Native's Animated library and the registration and log-in/authorization flow.`
const what = `Intended as an online solution to allow sharing the look and feel of an app without the need for an app simulator, server or launching it on the App Store.`

export default class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.inner_container}>
                  <Header message= "Press to Log In" />
                <Image style={styles.pics} source={require('../assets/logo-react.png')}/>

                <Text style={styles.aboutTitle}>What This Is</Text>
                <View style={styles.text_field}>
                <Text style={styles.aboutText}>{about}</Text>
              </View>

                <Image style={styles.pics} source={require('../assets/laptop-mobile.jpg')}/>
                <Text style={styles.aboutTitle}>What's the point?</Text>
                <View style={styles.text_field}>
                <Text style={styles.aboutText}>{what}</Text>
              </View>
                <Link style={{textAlign:'center'}} to='/'>Back</Link>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row'

  },
  inner_container:{
    width: '100%',
    height: '100%'
  },
  text_field: {
    margin: 'auto',
    width: '80%',
    textAlign:'center'
  },
    pics: {
        height: 300
    },
    aboutTitle: {
        paddingTop: 10,
        textAlign: 'center'
    },
    aboutText: {
        paddingBottom: 20,
    },

});
