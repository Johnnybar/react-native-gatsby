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
      if (window.confirm('Are you sure you want to log out?')) {
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
      {/*  console.log('NONE');*/}
      }
      else if( result === null){
        AsyncStorage.setItem('userLoggedIn', 'none', (err,result)=>{
        {/*  console.log('Set user to NONE');*/}
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
      : 'LOG IN'
    return (<View style={styles.headStyle}>

      <Image style={styles.logoStyle} source ={require('../assets/logo-react.png')}/>
      <Text style={styles.headText} onPress={this.toggleUser}>{display}
      </Text>
    </View>)
  }
}

const styles = StyleSheet.create({
  headStyle: {
    display: 'flex',
    alignContent:'center',
    paddingRight: 10,

    backgroundColor: Platform.OS === 'android'
      ? '#c87f0a'
      : '#c87f0a',
    flex: 2,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000000',

  },
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 16,
    flex: 1,
  },
  logoStyle:{
    left: 'auto',
    flex: 0.2,
    width: 'auto',
    height: 'auto',
    paddingTop: 45,
    paddingBottom: 45,
    paddingLeft: 45




  }
})
