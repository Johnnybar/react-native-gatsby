import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

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


export const IndexPage = () => (
  <View style={styles.box}>
    <Text style={styles.text}>Hi this is React-Native-Web rendered by Gatsby</Text>
    <TouchableOpacity style={styles.button} onPress={() => alert("it works")}>
      <Text style={styles.buttonText}>Button</Text>
    </TouchableOpacity>
    <Link to="/page-2/">Go to page 2</Link>
  </View>
);

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Dimension</h1>
                <p>Hello</p>
                <View style={styles.box}>
                  <Text style={styles.text}>Hi this is React-Native-Web rendered by Gatsby</Text>
                  <TouchableOpacity style={styles.button} onPress={() => alert("it works")}>
                    <Text style={styles.buttonText}>Button</Text>
                  </TouchableOpacity>
                  <Link to="/page-2/">Go to page 2</Link>
                  <View style={styles.container}>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          console.log('LessonRT')}
        }>
          <Text style={styles.buttonText}>
            LESSONS
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          console.log('RegisterRT')}
        }>
          <Text style={styles.buttonText}>
            REGISTER
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          console.log('BlogRT')}
        }>
          <Text style={styles.buttonText}>
            BLOG
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          console.log('ContactRT')}
        }>
          <Text style={styles.buttonText}>
            CONTACT
          </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          console.log('QuizRT')}
        }>
          <Text style={styles.buttonText}>
            QUIZ
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonStyles} onPress={()=>{
          console.log('AboutRT')}
        }>
          <Text style={styles.buttonText}>
            ABOUT
          </Text>
        </TouchableOpacity>
      </View>

    </View>
                </View>


            </div>
        </div>

    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}



export default Header
