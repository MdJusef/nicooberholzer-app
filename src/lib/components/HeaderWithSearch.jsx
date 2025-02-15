import React,{useEffect} from "react";
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet,StatusBar } from "react-native";
import { SvgXml } from "react-native-svg";
import avatar from "../../assets/Icons/avater.png";
import { IconNotification,search } from "../../assets/Icons/icons";


const HeaderWithSearch = () => {

   useEffect(() => {
      
      // Force the status bar background color to white and icons to black
      StatusBar.setBarStyle('white-content'); // Black icons
      StatusBar.setBackgroundColor('red'); // White background
  
      
    }, []);


  return (
    <View style={styles.headerContainer}>
      {/* Top Section: Avatar, Welcome Text, and Notification Icon */}
      <View style={styles.topSection}>
        {/* Left Side: Avatar and Text */}
        <View style={styles.leftContainer}>
          <Image source={avatar} style={styles.avatar} />
          <View>
            <Text style={styles.welcomeText}>Welcome Back,</Text>
            <Text style={styles.userName}>John Doe</Text>
          </View>
        </View>

        {/* Right Side: Notification Icon */}
        <TouchableOpacity style={styles.notificationButton}>
          <SvgXml xml={IconNotification} />
        </TouchableOpacity>
      </View>

      {/* Search Box */}
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search tickets"
          placeholderTextColor="gray"
        />
        <SvgXml xml={search} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "red",
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  topSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  leftContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  welcomeText: {
    color: "white",
    fontSize: 14,
    fontWeight: "400",
  },
  userName: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  notificationButton: {
    padding: 8,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  searchInput: {
    flex: 1,
    paddingVertical: 8,
    fontSize: 16,
    color: "black",
  },
  searchIcon: {
    marginLeft: 8,
  },
});

export default HeaderWithSearch;
