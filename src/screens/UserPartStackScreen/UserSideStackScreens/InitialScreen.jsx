import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import { SvgXml } from 'react-native-svg';
import {
  IconNotification,
  message,
  qrscan,
  navigation,
} from '../../../assets/Icons/icons';
import avater from '../../../assets/Icons/avater.png';

const openCalls = [
  {
    id: '1',
    title: 'ViewSonic',
    date: '17/12/2024',
    code: 'JF265NC0SB',
    address: 'Road no. 14, Block-D, Banasree, Dhaka.',
    status: 'New',
  },
];

const closedCalls = [
  {
    id: '1',
    title: 'ViewSonic',
    date: '15/12/2024',
    code: 'JF265NC0SB',
    address: 'Dhanmondi, Dhaka.',
    status: 'Completed',
  },
  {
    id: '2',
    title: 'HP',
    date: '14/12/2024',
    code: 'CD456ABC',
    address: 'Banani, Dhaka.',
    status: 'Completed',
  },
  {
    id: '3',
    title: 'ViewSonic',
    date: '15/12/2024',
    code: 'JF265NC0SB',
    address: 'Dhanmondi, Dhaka.',
    status: 'Completed',
  },
  {
    id: '4',
    title: 'HP',
    date: '14/12/2024',
    code: 'CD456ABC',
    address: 'Banani, Dhaka.',
    status: 'Completed',
  },
];

const CallItem = ({ title, date, code, address, status }) => (
  <View style={styles.callCard}>
    <View style={styles.buttons}>
      <Text style={styles.callTitle}>{title}</Text>
      <Text style={styles.callDate}>{date}</Text>
      <TouchableOpacity>
        <SvgXml xml={navigation} />
      </TouchableOpacity>
    </View>
    <View style={styles.buttons}>
      <Text style={styles.callCode}>{code}</Text>
      <View style={styles.callFooter}>
        <Text
          style={status === 'New' ? styles.statusNew : styles.statusCompleted}
        >
          {status}
        </Text>
      </View>
    </View>
    <Text style={styles.callAddress}>{address}</Text>
  </View>
);

const InitialScreenUser = () => {
  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <View style={styles.profileInfo}>
          <Image source={avater} style={styles.profileImage} />
          <View>
            <Text style={styles.greeting}>Good afternoon,</Text>
            <Text style={styles.userName}>Md. Mehedi Hasan</Text>
          </View>
        </View>
        <View style={styles.buttons}>
          <TouchableOpacity>
            <SvgXml xml={message} />
          </TouchableOpacity>
          <TouchableOpacity>
            <SvgXml xml={IconNotification} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.qrSection}>
        <View style={styles.qrBox}>
          <SvgXml xml={qrscan} />
        </View>
      </View>
    </>
  );

  const renderFooter = () => (
    <View style={styles.callsSection}>
      <View style={styles.closedHeader}>
        <Text style={styles.sectionTitle}>Closed calls</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See all</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={closedCalls}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <CallItem {...item} />}
      />
    </View>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={openCalls}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <CallItem {...item} />}
      ListFooterComponent={renderFooter}
      showsVerticalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFFFF' },
  header: {
    backgroundColor: '#E50914',
    paddingTop: 40,
    paddingBottom: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  profileInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 10,
  },
  profileImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  greeting: { color: 'white', fontSize: 14 },
  userName: { color: 'white', fontSize: 18, fontWeight: 'bold' },
  qrSection: { alignItems: 'center', paddingHorizontal: 20 },
  qrBox: { borderRadius: 10, padding: 30, marginBottom: 10 },
  callsSection: { paddingHorizontal: 10, marginBottom: 20 },
  sectionTitle: { fontSize: 16, fontWeight: '600', marginBottom: 6 },
  callCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 8,
  },
  callTitle: { color: '#FF0205', fontSize: 14, fontWeight: '500' },
  callCode: {
    color: '#000000',
    fontSize: 12,
    fontWeight: '500',
    marginVertical: 5,
  },
  callAddress: { color: '#878787', fontSize: 14, fontWeight: '400' },
  callFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  callDate: { color: '#878787', fontSize: 10, fontWeight: '400' },
  statusNew: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#FF8383',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  statusCompleted: {
    fontSize: 12,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#00950A',
    paddingHorizontal: 20,
    paddingVertical: 5,
    borderRadius: 100,
  },
  closedHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  seeAll: { color: '#E50914', fontWeight: 'bold' },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 15,
  },
});

export default InitialScreenUser;
