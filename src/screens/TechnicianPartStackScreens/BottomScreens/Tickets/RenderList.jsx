import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {SvgXml} from 'react-native-svg';
import {listNavigationIcon} from '../../../../assets/Icons/icons';
const TicketList = () => {
  const navigation = useNavigation();

  const runningTickets = [
    {id: '1', title: 'ViewSonic', code: 'JF2656NCDS8', date: '17/12/2024'},
  ];
  const pastTickets = [
    {
      id: '2-1', // Changed ID to make it unique
      title: 'ViewSonic',
      code: 'JF2656NCDS8',
      address: 'Road no. 14, Block-D, Banasree, Dhaka.',
      date: '10/12/2024',
    },
    {
      id: '2-2', // Changed ID to make it unique
      title: 'ViewSonic',
      code: 'JF2656NCDS8',
      address: 'Road no. 14, Block-D, Banasree, Dhaka.',
      date: '10/12/2024',
    },
    {
      id: '2-3', // Changed ID to make it unique
      title: 'ViewSonic',
      code: 'JF2656NCDS8',
      address: 'Road no. 14, Block-D, Banasree, Dhaka.',
      date: '10/12/2024',
    },
    {
      id: '2-4', // Changed ID to make it unique
      title: 'ViewSonic',
      code: 'JF2656NCDS8',
      address: 'Road no. 14, Block-D, Banasree, Dhaka.',
      date: '10/12/2024',
    },
    {
      id: '2-5', // Changed ID to make it unique
      title: 'ViewSonic',
      code: 'JF2656NCDS8',
      address: 'Road no. 14, Block-D, Banasree, Dhaka.',
      date: '10/12/2024',
    },
    {
      id: '2-6', // Changed ID to make it unique
      title: 'ViewSonic',
      code: 'JF2656NCDS8',
      address: 'Road no. 14, Block-D, Banasree, Dhaka.',
      date: '10/12/2024',
    },
  ];

  const renderRunningTicket = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TicketDetails', {ticket: item})}>
      <View style={styles.leftSection}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={styles.text}>{item.code}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <TouchableOpacity
        style={[styles.checkoutButton, styles.checkoutButtonRed]}>
        <Text style={styles.checkoutText}>Check-out</Text>
      </TouchableOpacity>

      <SvgXml xml={listNavigationIcon} style={styles.arrowIcon} />
    </TouchableOpacity>
  );

  const renderPastTicket = ({item}) => (
    <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate('TicketDetails', {ticket: item})}>
      <View style={styles.leftSection}>
        <Text style={[styles.text, styles.title]}>{item.title}</Text>
        <Text style={styles.text}>{item.code}</Text>
        <Text style={styles.text}>{item.address}</Text>
      </View>
      <Text style={styles.date}>{item.date}</Text>
      <TouchableOpacity style={styles.checkoutButton}>
        <Text style={styles.checkoutText}>Check-out</Text>
      </TouchableOpacity>
      <SvgXml xml={listNavigationIcon} style={styles.arrowIcon} />
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.sectionTitle}>Running Tickets</Text>
        <FlatList
          data={runningTickets}
          renderItem={renderRunningTicket}
          keyExtractor={item => item.id}
        />
      </View>
      <View>
        <Text style={styles.sectionTitle}>Past Tickets</Text>
        <FlatList
          data={pastTickets}
          renderItem={renderPastTicket}
          keyExtractor={item => item.id}
          ListFooterComponent={<View style={{marginBottom: '60%'}} />} // Extra bottom space
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    padding: 10,
    borderRadius: 8,
    marginVertical: 5,
    position: 'relative',
  },
  leftSection: {
    flex: 1,
  },
  text: {
    fontSize: 14,
    color: 'black',
  },
  title: {
    fontWeight: 'bold',
    color: 'red',
  },
  date: {
    position: 'absolute',
    top: 5,
    right: '45%',
    fontSize: 12,
    fontWeight: 'bold',
  },
  checkoutButton: {
    backgroundColor: 'green',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    marginTop: '12%',
  },
  checkoutButtonRed: {
    backgroundColor: 'red',
    marginTop: '12%',
  },
  checkoutText: {
    color: 'white',
    fontWeight: 'bold',
  },
  arrowIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
});

export default TicketList;
