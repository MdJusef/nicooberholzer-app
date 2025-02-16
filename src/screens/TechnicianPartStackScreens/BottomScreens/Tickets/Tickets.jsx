import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderWithSearch from '../../../../lib/components/HeaderWithSearch'
import TicketList from './RenderList'




const Tickets = () => {
  return (
    <View style={styles.container}>
      <HeaderWithSearch/>
      
      <TicketList/>
      
      


     
    </View>


  )
}

export default Tickets

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})