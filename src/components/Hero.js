import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  TouchableOpacity,
  Alert
} from 'react-native';
let color;
let num;

export class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: new Animated.Value(0),
      enlarge: new Animated.Value(0),
      colorChange: false
    }
  }

  onAnimationCompletion = () => {

    if (num === 0 || num === undefined) {
      num = 1
    }  else {
      num = 0
    }
    this.animation(num);
  }

  animation = (number) => {

    Animated.parallel([
      Animated.timing(this.state.color, {
        toValue: number, // Animate to opacity: 1 (opaque)
        duration: 1500
      }),
      Animated.timing(this.state.enlarge, {
        toValue: 400,
        duration: 1000
      })
    ]).start(this.onAnimationCompletion)

  }

  componentDidMount() {
    this.animation(1)
  }

  render() {
    if(this.state.colorChange !== true){
     color = this.state.color.interpolate({
      inputRange: [
        0, 1
      ],
      outputRange: ['#FFF05A', '#FF785A']
    });
    }
    else{
      color = this.state.color.interpolate({
        inputRange: [
          0, 1
        ],
        outputRange: ['#7ed3d0', '#f7c4ff']
      })
    }
    return (<Animated.View style={[
        styles.headStyle, {
          height: this.state.enlarge,
          left: '-1vw',
          width:'100%'
        }
      ]}>
      <TouchableOpacity style={{height: 400, alignItems: 'center'}} onPress={()=> {

        this.setState((prevState)=>({
          color: new Animated.Value(0),
          colorChange: !prevState.colorChange
        }))

    }}>
    <Animated.Image style={{
          height: this.state.enlarge,
          backgroundColor: color,
          width: '100%',
          left: '3%'
        }} source ={require('../assets/bg.png')}/>
      </TouchableOpacity>
    </Animated.View>)
  }
}

const styles = StyleSheet.create({

  headStyle: {
    paddingRight: 10,
    height: 400,
    flex: 2,
    flexDirection: 'column',
    borderBottomWidth: 2,
    borderColor: '#000000'
  },
  heroImage: {
    width: undefined,
    height: undefined,
    flex: 8

  }
})
