import React from 'react';
import {
  Animated,
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
        <TouchableOpacity style={styles.first}><Link style={{ textDecoration: 'none' }} to="/videos-page/">
          <Text style={styles.buttonText}>
            VIDEOS
          </Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.second}><Link style={{ textDecoration: 'none' }} to="/register-page/">
          <Text style={styles.buttonText}>
            REGISTER
          </Text>
        </Link>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.third}><Link style={{ textDecoration: 'none' }} to="/blog-page/">
          <Text style={styles.buttonText}>
            BLOG
          </Text>
        </Link>
        </TouchableOpacity>
        <TouchableOpacity style={styles.fourth}><Link style={{ textDecorationLine: 'none' }} to="/contact-page/">
          <Text style={styles.buttonText}>
            CONTACT
          </Text>
        </Link>
        </TouchableOpacity>
      </View>
      <View style={styles.aboutRow}>

        <TouchableOpacity style={styles.fifth}><Link style={{ textDecoration: 'none' }} to="/about-page/">
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
    backgroundColor: '#976008',
    boxShadow: '0 0px 50px rgba(0, 0, 0, 0.7)',
 display: 'flex',
 top: '160%',
  },
  buttonRow: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#976008'
  },
  aboutRow: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#976008'
  },
  first:{
    backgroundColor: '#f39c12',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
	  cursor: 'pointer',
	  display: 'flex',
    justifyContent: 'center',
  },
  second:{
    backgroundColor: '#e08e0b',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
	  cursor: 'pointer',
	  display: 'flex',
    justifyContent: 'center',
  },
  third:{
    backgroundColor: '#c87f0a',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
	  cursor: 'pointer',
	  display: 'flex',
    justifyContent: 'center',
  },
  fourth:{
    backgroundColor: '#b06f09',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
	  cursor: 'pointer',
	  display: 'flex',
    justifyContent: 'center',
  },
  fifth:{
    backgroundColor: '#976008',
    width: '50%',
    height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
	  cursor: 'pointer',
	  display: 'flex',
    justifyContent: 'center',
  },

  buttonText:{
    fontSize: 21,
    color: '#ffffff',
    letterSpacing: '4px',
letterSpacing: '4px',
textAlign: 'center'


  }
})
