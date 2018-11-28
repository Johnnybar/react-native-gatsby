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

    if (num === 0) {
      num = 1
    }  else {
      num = 0
    }
    this.animation(num);
  }

  animation = (num) => {

    Animated.parallel([
      Animated.timing(this.state.color, {
        toValue: num, // Animate to opacity: 1 (opaque)
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
      outputRange: ['#E9AFA3', '#F9DEC9']
    });
    }
    else{
      color = this.state.color.interpolate({
        inputRange: [
          0, 1
        ],
        outputRange: ['#FFF05A', '#FF785A']
      })
    }
    return (<Animated.View style={[
        styles.headStyle, {
          height: this.state.enlarge,
          backgroundColor: color
        }
      ]}>
      <TouchableOpacity style={{height: 200, alignItems: 'center'}} onPress={()=> {

        this.setState((prevState)=>({
          color: new Animated.Value(0),
          colorChange: !prevState.colorChange
        }))

    }}><Text style={{color: 'black', fontSize: 30}}>Tap background to change color theme</Text>
      </TouchableOpacity>
    </Animated.View>)
  }
}

const styles = StyleSheet.create({

  headStyle: {
    paddingTop: 30,
    paddingRight: 10,
    height: 400,
    backgroundColor: 'rgb(206,200,192)',
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
