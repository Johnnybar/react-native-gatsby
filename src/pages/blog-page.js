import React from 'react';
import {
  Text,
  View,
  FlatList,
  WebView,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity
} from 'react-native';
import {Link} from 'gatsby'
import {Header} from '../components/HeaderNew'

export default class Blog extends React.Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      blogLoaded: false
    };
  }

  componentDidMount() {
    return fetch('https://public-api.wordpress.com/rest/v1.1/sites/gpriefel.wordpress.com/posts').then((response) => response.json()).then((responseJson) => {
      this.setState({
        blogLoaded: true,
        blogList: Array.from(responseJson.posts)
      });
    }).catch((error) => {
      console.error(error);
    });
  }

  chooseBlog = (blogID) => {
    this.props.navigation.navigate('BlogDetailRT', {blogId: blogID});
  }

  render() {
    return (<View style={styles.container}>
      {
        this.state.blogLoaded && (
          <View style={styles.inner_container}>
            <Header message= "Press to Log In" />
          <FlatList data={this.state.blogList} keyExtractor={(item, index) => item.ID.toString()} renderItem={({item}) =>
             <BlogItem id={item.ID} title={item.title} imageSrc={item.featured_image} excerpt={item.excerpt.replace(/<(?:.|\n)*?>/gm, '')} choosePost={this.chooseBlog}/>}/>

        </View>)
      }
      {
        !this.state.blogLoaded && (<View style={{
            paddingTop: 30
          }}>
          <Text>
            LOADING
          </Text>
        </View>)
      }
      <Link to='/'>Back</Link>
    </View>);
  }

}


export class BlogItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postLoaded: false
    }
  }

  blogChoice = () => {
    return fetch(`https://public-api.wordpress.com/rest/v1.1/sites/gpriefel.wordpress.com/posts/${this.props.id}`).then((response) => response.json()).then((responseJson) => {

      this.setState({postLoaded: true, postTitle: responseJson.title, postImage: responseJson.featured_image, postContent: responseJson.content, postID: responseJson.ID});
    }).catch((error) => {
      console.error(error);
    });
  }

  render() {
    let newState
    if (this.state.postContent){
      newState = this.state.postContent.replace(/<(?:.|\n)*?>/gm, '')
      console.log(newState);
  }
    return (<View style={styles.blog_container}>
      {
        !this.state.postLoaded && (
          <View>
            <View style={styles.text_field}>
              <TouchableOpacity onClick={() => this.blogChoice()}>
          <img style={{
              width: '50%',
              margin: 'auto'

            }} src={this.props.imageSrc}/>
            </TouchableOpacity>
          <h1>{this.props.title}</h1>
          <h4>{this.props.excerpt}</h4>
        </View>
        </View>)
      }
      {
        this.state.postLoaded && (<ScrollView style={styles.blog_container}>
          <View style={styles.open_text_field}>
          <TouchableOpacity onPress={() => {
              this.setState((prevState, props) => ({postLoaded: false}))
            }}>
            <Image style={{
                height: 200
              }} source={{
                uri: this.state.postImage
              }}/>
          </TouchableOpacity>
        </View>
          <View style={styles.open_text_field}>
            <h1>{this.state.postTitle}</h1>
          </View>


          <View style={{ padding: 20 }}>
            <div dangerouslySetInnerHTML={{ __html: newState }} />
          </View>

          <div>
            <Link to={'/'} style={{
                textDecorationLine: 'none',
                color: '#000000'
              }}>
            </Link>
          </div>
        </ScrollView>)
      }

    </View>);
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
  },
  blog_container:{
    paddingTop: 40
  },
  inner_container: {
    width: '100%',

  },
  text_field: {
    margin: 'auto',
    width: '50%',
    textAlign: 'center'
  },
  open_text_field: {
    margin: 'auto',
    width: '70%',
    textAlign: 'center'
  },
  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  }

});
