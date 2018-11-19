import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';

const styles = StyleSheet.create({
  box: { padding: 10, margin: 10, borderWidth: 1, borderColor: "black" },
  text: { fontWeight: 'bold', color: "red" },
  button: {
    marginVertical: 40, paddingVertical: 20, paddingHorizontal: 10,
    borderWidth: 1, borderColor: "black", backgroundColor: "lightgrey", alignItems: "center"
  },
  buttonText: { fontWeight: 'bold', color: "black" },
});

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
                </View>
                <p>A fully responsive site  designed by <a href="https://html5up.net">HTML5 UP</a> and released<br />
                for free under the <a href="https://html5up.net/license">Creative Commons</a> license.</p>

            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
