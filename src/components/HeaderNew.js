import React from 'react';
import {StyleSheet, Text, View, Image, Platform, AsyncStorage, Alert} from 'react-native';

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
      AsyncStorage.setItem('userLoggedIn', 'none', (err,result)=>{
        this.setState({
          isLoggedIn:false,
          loggedUser: false
        })
        Alert.alert('User logged out')
      })
    }
    else{
      this.setState({
        isLoggedIn: true
      })

      // this.props.navigate('LoginRT')
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
      ? 'Logged In'
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
      ? '#31e981'
      : '#35605a',
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
