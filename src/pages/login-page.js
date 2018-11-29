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
import { navigate } from "gatsby"
import {Header} from '../components/HeaderNew.js'


export default class Login extends React.Component{
  static navigationOptions ={
    header: null
  };
  constructor(props){
    super(props)
    this.state = {
      username: '',
      password: ''
      }
  }
  cancelLogin=()=>{
    alert('Login cancelled');
    navigate('/')
  }

  loginUser=()=>{
    if(!this.state.username){
      alert('Please enter a username')
    }
    else if(!this.state.password){
      alert('Please enter a password')
    }
    else{
      AsyncStorage.getItem('userLoggedIn', (err,result)=>{
        if(result!=='none'){
          alert('Someone already logged in');
          navigate('/')
        }
        else{
          AsyncStorage.getItem(this.state.username, (err,result)=>{
            if(result !== null){
              if(result!==this.state.password){
                alert('Password incorrect')
              }
              else{
                AsyncStorage.setItem('userLoggedIn', this.state.username, (err,result)=>{
                  alert(`${this.state.username} logged in`);
                  navigate('/')
                })
              }
            }
            else{
              alert(`No account for ${this.state.username}`)
            }
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
        <Text style={styles.heading}>Log In</Text>
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

        <TouchableHighlight onPress={this.loginUser} underlayColor='#31e981'>
          <Text style={styles.buttons}>Log In</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.cancelLogin} underlayColor='#31e981'>
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
    width: '100%',
    height: '100%'
  },
  input: {
    flex: 1,
    width: '80%',
    padding: 10
  },
  buttons: {
    marginTop: 15,
    fontSize: 16,
    textAlign: 'center'
  },
  labels:{
    paddingBottom:10
  }
})
