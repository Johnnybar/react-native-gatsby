import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  Alert,
  AsyncStorage
} from 'react-native';

import {Header} from '../components/HeaderNew.js'
import { navigate } from "gatsby"

export default class Register extends React.Component{

  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: '',
      passwordConfirm: ''
      }
  }
  cancelRegister=()=>{
    alert('Registration cancelled')
    navigate('/')
  }

  registerAccount = ()=>{
    if(!this.state.username){
      alert('Please enter a username')
    }
    else if(this.state.password !== this.state.passwordConfirm){
      alert('Passwords do not match')
    }
    else {
      AsyncStorage.getItem(this.state.username, (err,result)=>{
        if(result!==null){
          alert(`${this.state.username} already exists`)
        }
        else {
          AsyncStorage.setItem(this.state.username, this.state.password, (err,result)=>{
            alert(`${this.state.username} account created!`);
            navigate('/')
          })
        }
      })
    }
  }

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.inner_container}>
          <Header message = "Press to Log In" />
        <Text style={styles.heading}>Register Account</Text>

        <TextInput
          style={styles.input}
          onChangeText = {(text)=>this.setState({username: text})}
          value={this.state.username}
        />

        <Text style={styles.label}>Enter Username</Text>
        <TextInput
          style={styles.input}
          onChangeText = {(text)=>this.setState({password: text})}
          value={this.state.password}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Enter Password</Text>
        <TextInput
          style={styles.input}
          onChangeText = {(text)=>this.setState({passwordConfirm: text})}
          value={this.state.passwordConfirm}
          secureTextEntry={true}
        />
        <Text style={styles.label}>Confirm Password</Text>

        <TouchableHighlight onPress={this.registerAccount} underlayColor='#31e981'>
          <Text style={styles.buttons}>Register</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelRegister} underlayColor='#31e981'>
          <Text style={styles.buttons}>Cancel</Text>
        </TouchableHighlight>
      </View>
      </View>
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'

  },
  inner_container:{
    width: '70%',
    height: '100%'
  },
  heading:{
    fontSize: 16,
    flex:1
  },
  input: {
    flex: 1,
    width: '80%',
    padding: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16
  },
  labels:{
    paddingBottom:10
  }
})
