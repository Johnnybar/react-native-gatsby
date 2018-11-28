import React from 'react';
import {
  StyleSheet,
  Text,
  Image,
  View,
  Animated,
  TouchableOpacity
} from 'react-native';
let num;
export class Hero extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: new Animated.Value(0),
      enlarge: new Animated.Value(0)
    }
  }

  onAnimationCompletion = () => {
    console.log(num);
    if (num === 0) {
      num = 1
    } else if (num === 1) {
      num = 2
    } else {
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
    const color = this.state.color.interpolate({
      inputRange: [
        0, 1, 2
      ],
      outputRange: ['#AEC5EB', '#F9DEC9', '#E9AFA3']
    });
    return (<Animated.View style={[
        styles.headStyle, {
          height: this.state.enlarge,
          backgroundColor: color
        }
      ]}>
      <Image style={styles.heroImage} source={require('../assets/Logo.png')}/>

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
