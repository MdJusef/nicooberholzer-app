import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithSearch from '../../../lib/components/HeaderWithSearch'





const Tickets = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearch/>


     
    </View>


  )
}

export default Tickets

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})