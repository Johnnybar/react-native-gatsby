import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import {Header} from '../components/HeaderNew'
const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

export default class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <View style={styles.container}>
              <View style={styles.inner_container}>
                  <Header message= "Press to Log In" />
                <Image style={styles.pics} source={require('../assets/mountlogo.png')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../assets/Logo.png')}/>
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Link to='/'>Back</Link>
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
    width: '50%',
    height: '100%'
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
    backButton: {
        paddingBottom: 50,
        textAlign: 'center'
    }
});
