import React from 'react';
import {
  Text,
  View,
  FlatList,
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
    return (<View>
      {
        !this.state.postLoaded && (<View>
          <TouchableOpacity onClick={() => this.blogChoice()}>
          <img style={{
              width: '100%',

            }} src={this.props.imageSrc}/>
            </TouchableOpacity>
          <h1 >{this.props.title}</h1>
          <h4>{this.props.excerpt}</h4>
        </View>)
      }
      {
        this.state.postLoaded && (<ScrollView>
          <TouchableOpacity onPress={() => {
              this.setState((prevState, props) => ({postLoaded: false}))
            }}>
            <Image style={{

                height: 200
              }} source={{
                uri: this.state.postImage
              }}/>
          </TouchableOpacity>
          <div>
            <h1>{this.state.postTitle}</h1>
          </div>

          <div style={{ paddingBottom: 20 }}>
            {this.state.postContent.replace(/<(?:.|\n)*?>/gm, '')}
          </div>

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
  inner_container: {
    width: '70%',

  },

  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  }

});
