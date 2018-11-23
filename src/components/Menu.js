import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Alert,
  TouchableOpacity
} from 'react-native';
import {Link} from 'gatsby'

export class Menu extends React.Component {


  render() {
    return (<View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles}><Link to="/videos-page/">
          <Text style={styles.buttonText}>
            VIDEOS
          </Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          this.props.navigate('RegisterRT')}
        }>
          <Text style={styles.buttonText}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles}><Link to="/blog-page/">
          <Text style={styles.buttonText}>
            BLOG
          </Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles}><Link to="/contact-page/">
          <Text style={styles.buttonText}>
            CONTACT
          </Text>
        </Link>
        </TouchableOpacity>
      </View>
      <View style={styles.aboutRow}>

        <TouchableOpacity style={styles.buttonStyles}><Link to="/about-page/">
          <Text style={styles.buttonText}>
            ABOUT
          </Text>
        </Link></TouchableOpacity>
      </View>

    </View>)
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 6,
    backgroundColor: '#35605a'
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffffff'
  },
  aboutRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#ffffff'
  },
  buttonStyles:{
    backgroundColor:'#35605a',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText:{
    fontSize: 18,
    color: '#ffffff'
  }
})
