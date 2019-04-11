import React from 'react';
import {Link} from 'gatsby'
import {
  Alert,
  Button,
  WebView,
  Text,
  View,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  StyleSheet,
  Platform
} from 'react-native';
import {Header} from '../components/HeaderNew'

let tubeUrl;
let apiCode;
let secrets;
if (process.env.NODE_ENV != 'production') {
  secrets = require('../../secrets.json');
  apiCode = secrets.api;
} else {
  apiCode = process.env.API_KEY;
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

    return fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=react_native&type=video&key=${apiCode}`).then((response) => response.json()).then((responseJson) => {
      this.setState({
        listLoaded: true,
        videoList: Array.from(responseJson.items)
      })
    }).catch((error) => {
      alert('Videos could not be loaded');
    })
  }
  render() {
    // const {navigate} = this.props.navigation
    return (

      <View style={styles.container}>

      {
        this.state.listLoaded && (<View style={styles.inner_container}>
          <Header />
          <Text style={styles.title}>YouTube Results for 'React Native'</Text>
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

      <Link style={{textAlign:'center'}} to='/'>Back</Link>
    </View>)
  }
}

export class TubeItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}

  }
  onPress = () => {
    tubeUrl = `https://www.youtube.com/embed/${this.props.id}`;
    this.setState({ytLink: tubeUrl})
  }

  render() {
    return (<View>

      {
        this.state.ytLink && (<View>
          <iframe src={this.state.ytLink} width="560" height="315" frameBorder="0" allowFullScreen="allowFullScreen"></iframe>
          <Button title='close' style={styles.closeButton} onPress={() => this.setState({ytLink: false})}></Button>
        </View>)
      }
      {
        !this.state.ytLink && <TouchableWithoutFeedback  onPress={this.onPress}>

            <View style={styles.video_field}>
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

          </TouchableWithoutFeedback>
      }
    </View>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'

  },
  inner_container: {
    width: '100%',
    height: '100%'
  },
  title:{
    textAlign:'center',
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    fontStyle:'oblique'
  },
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
  video_field: {
    margin: 'auto',
    width: '80%',
    padding: 20
  },
  headText: {
    textAlign: 'right',
    color: '#ffffff',
    fontSize: 20,
    flex: 1
  },
  closeButton:{
    width: 100,
    height: 100
  }
});
