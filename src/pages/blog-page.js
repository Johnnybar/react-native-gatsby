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
          <FlatList data={this.state.blogList} keyExtractor={(item, index) => item.ID.toString()} renderItem={({item}) =>
             <BlogItem id={item.ID} title={item.title} imageSrc={item.featured_image} excerpt={item.excerpt} choosePost={this.chooseBlog}/>}/>

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'

  },
  inner_container: {
    width: '50%'
  },

  backButton: {
    paddingBottom: 50,
    textAlign: 'center'
  }

});

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
    return (<View style={styles.container}>
      {
        !this.state.postLoaded && (<View style={styles.inner_container}>
          <TouchableOpacity onClick={() => this.blogChoice()}>
          <img style={{
              width: '60%'
            }} src={this.props.imageSrc}/>
            </TouchableOpacity>
          <h1 >{this.props.title}</h1>
          <h4>{this.props.excerpt}</h4>
        </View>)
      }
      {
        this.state.postLoaded && (<ScrollView style={styles.inner_container}>
          <TouchableOpacity onPress={() => {

              this.setState((prevState, props) => ({postLoaded: false}))
            }}>
            <Image style={{
                width: '100%',
                height: 200
              }} source={{
                uri: this.state.postImage
              }}/>
          </TouchableOpacity>
          <div className="blTitle">
            <h1>{this.state.postTitle}</h1>
          </div>

          <div className="blContent">
            {this.state.postContent}
          </div>

          <div className="blBack">
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
