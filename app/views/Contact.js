import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  TouchableHighlight, Alert
} from 'react-native';
import {StackNavigator} from 'react-navigation'


import {Header} from '../sections/Header.js'

export default class Contact extends React.Component {
    static navigationOptions = {
      header: null
  }
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
    this.props.navigation.goBack()
  }
    render() {
      const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Header navigate = {navigate} message = "Press to Log In" />
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
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%'
  },
    heading: {
      fontSize: 16,
      flex:1
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
