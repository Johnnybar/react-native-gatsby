import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight, Alert
} from 'react-native';
import {Link} from 'gatsby'

import {Header} from '../components/HeaderNew.js'

export default class Contact extends React.Component {

  constructor(props){
    super(props);
    this.state ={
      msg: 'Enter message',
      name: 'Enter name',
      email: 'Enter Email Address'
    }
  }

  clearFields = () => this.setState({name: '', msg: '', email: '' })

  sendMessage =()=>{
    Alert.alert(this.state.name, this.state.msg);

  }
    render() {

    return (
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Header />
        <Text style={styles.heading}>Contact Us</Text>
        <TextInput
          style={styles.inputs}
          onChangeText = {(text)=> this.setState({name: text})}
          value ={this.state.name}
        />
        <TextInput
          style={styles.multiInput}
          onChangeText = {(text)=> this.setState({msg: text})}
          value ={this.state.msg}
          multiline= {true}
          numberOfLines = {4}
        />
        <TextInput
          style={styles.inputs}
          onChangeText = {(text)=> this.setState({email: text})}
          value ={this.state.email}
        />
        <TouchableHighlight onPress = {this.sendMessage} underlayColor = '#31e981'>
          <Text style = {styles.button}>
            Send Message
          </Text>
      </TouchableHighlight>
        <TouchableHighlight onPress = {this.clearFields} underlayColor = '#31e981'>
          <Text style = {styles.button}>
            Reset Form
          </Text>
      </TouchableHighlight>
    </View>
    <Link to='/'>Back</Link>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'

  },
  inner_container:{
    width: '70%',
    height: '100%'
  },
  backButton: {
      paddingBottom: 50,
      textAlign: 'center'
  },
    heading: {
      fontSize: 16,
      flex:1,
      textAlign: 'center'
    },
    inputs: {
      flex: 1,
      width: '80%',
      padding: 10
    },
    multiInput: {
      flex: 2,
      width: '90%',
      paddingTop: 20
    },
    buttons: {
      marginTop: 15,
      fontSize: 16
    }
})
