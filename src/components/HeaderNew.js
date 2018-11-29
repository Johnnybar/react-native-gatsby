import React from 'react';
import {StyleSheet, Text, View, Image, Platform, AsyncStorage, Alert} from 'react-native';
import { navigate } from "gatsby"

export class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false,
      loggedUser: false
    }
  }
  toggleUser = () => {
    if(this.state.isLoggedIn){
      if (window.confirm('Are you sure you wish to log out?')) {
        AsyncStorage.setItem('userLoggedIn', 'none', (err,result)=>{
          this.setState({
            isLoggedIn:false,
            loggedUser: false
          })
          alert('User logged out')
        })
      }
    }
    else{
      navigate('/login-page')
    }
  }

  componentDidMount(){
    AsyncStorage.getItem('userLoggedIn', (err,result)=>{
      if (result === 'none'){
        console.log('NONE');
      }
      else if( result === null){
        AsyncStorage.setItem('userLoggedIn', 'none', (err,result)=>{
          console.log('Set user to NONE');
        })
      }
      else{
        this.setState({
          isLoggedIn:true,
          loggedUser: result
        })
      }
    })
  }

  render() {
    let display = this.state.isLoggedIn
      ? this.state.loggedUser
      : this.props.message;
    return (<View style={styles.headStyle}>

      <Image style={styles.logoStyle} source ={require('../assets/mountlogo.png')}/>
      <Text style={styles.headText} onPress={this.toggleUser}>{display}
      </Text>
    </View>)
  }
}

const styles = StyleSheet.create({
  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    backgroundColor: Platform.OS === 'android'
      ? '#444444'
      : '#444444',
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 2,
    borderColor: '#000000',

  },
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1
  },
  logoStyle:{
    flex: 1,
    width: undefined,
    height: undefined
  }
})
