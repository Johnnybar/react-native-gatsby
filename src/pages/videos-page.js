import React from 'react';
import {Link} from 'gatsby'
import {
  Alert,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  StyleSheet
} from 'react-native';

let apiCode;
let secrets;
if (process.env.NODE_ENV != 'production') {
  console.log('in if');
  secrets = require('../../secrets.json');
  apiCode = secrets.api;
} else {
  apiCode = process.env.API;
}

export default class Video extends React.Component {
  static navigationOptions = {
    header: null
  };
  constructor(props) {
    super(props)
    this.state = {
      listLoaded: false
    }

  }
  componentDidMount() {
console.log(apiCode);
    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=react_native&type=video&key=${apiCode}`).then((response) => response.json()).then((responseJson) => {
      console.log(responseJson);
      this.setState({
        listLoaded: true,
        videoList: Array.from(responseJson.items)
      })
    }).catch((error) => {
      console.error(error);
    })
  }
  render() {
    // const {navigate} = this.props.navigation
    return (<View style={styles.container}>
      {
        this.state.listLoaded && (<View style={styles.inner_container}>
          <FlatList data={this.state.videoList} renderItem = {({item})=>
                <TubeItem

                  id = {item.id.videoId}
                  title = {item.snippet.title}
                  imageSrc = {item.snippet.thumbnails.high.url}
                />
              }/>
        </View>)
      }
      {
        !this.state.listLoaded && (<View style={{
            paddingTop: 30
          }}>
          <Text>
            LOADING
          </Text>
        </View>)
      }

      <Link to='/'>BACK</Link>
    </View>)
  }
}

export class TubeItem extends React.Component {

  onPress = () => {
    this.props.navigate('VideoDetailRT', {ytubeId: this.props.id})
  }

  render() {
    return (<TouchableWithoutFeedback onPress={this.onPress}>
      <View style={{
          paddingTop: 20,
          alignItems: 'center'
        }}>
        <Image style={{
            width: '100%',
            height: 200
          }} source={{
            uri: this.props.imageSrc
          }}/>
        <Text>
          {this.props.title}
        </Text>

      </View>
    </TouchableWithoutFeedback>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'

  },
  inner_container: {
    width: '30%',
    height: '100%'
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  }
});
