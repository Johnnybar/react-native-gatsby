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


export class Login extends React.Component{
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
    Alert.alert('Login cancelled');
    this.props.navigation.navigate('HomeRT')
  }

  loginUser=()=>{
    if(!this.state.username){
      Alert.alert('Please enter a username')
    }
    else if(!this.state.password){
      Alert.alert('Please enter a password')
    }
    else{
      AsyncStorage.getItem('userLoggedIn', (err,result)=>{
        if(result!=='none'){
          Alert.alert('Someone already logged in');
          this.props.navigation.navigate('HomeRT')
        }
        else{
          AsyncStorage.getItem(this.state.username, (err,result)=>{
            if(result !== null){
              if(result!==this.state.password){
                Alert.alert('Password incorrect')
              }
              else{
                AsyncStorage.setItem('userLoggedIn', this.state.username, (err,result)=>{
                  Alert.alert(`${this.state.username} logged in`);
                  this.props.navigation.navigate('HomeRT')
                })
              }
            }
            else{
              Alert.alert(`No account for ${this.state.username}`)
            }
          })
        }
      })
    }
  }

  render(){
    return (
      <View style={styles.container}>
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
    )
  }
}

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingBottom: '45%',
    paddingTop: '10%'
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
