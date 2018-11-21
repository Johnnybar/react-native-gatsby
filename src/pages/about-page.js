import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'
import { Button, StyleSheet, Text, View, ScrollView, Image } from 'react-native';
const aboutGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

const whatGlobo = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultrices mattis iaculis. Phasellus sit amet nibh blandit, blandit, pulvinar arcu id, elementum dolor. Aenean ut risus urna. Nulla accumsan consectetur lectus ut vestibulum.`

export default class About extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Image style={styles.pics} source={require('../assets/drake.jpeg')}/>

                <Text style={styles.aboutTitle}>Who We Are</Text>
                <Text style={styles.aboutText}>{aboutGlobo}</Text>

                <Image style={styles.pics} source={require('../assets/Logo.png')}/>
                <Text style={styles.aboutTitle}>What We Do</Text>
                <Text style={styles.aboutText}>{whatGlobo}</Text>
                <Link to='/'>Back</Link>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
  outer_container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    width: '50%'
  },
    container: {
      width: '50%',
      height: '100%',
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
