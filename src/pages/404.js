import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout style={styles.container}>
    <View style={styles.inner_container}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </View>
  </Layout>
)

export default NotFoundPage


const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column'

  },
  inner_container:{
    width: '70%',
    height: '100%'
  }
})
