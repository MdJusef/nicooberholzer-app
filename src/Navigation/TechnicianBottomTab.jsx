import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {Dimensions, Platform, Text} from 'react-native';
import Chats from '../screens/TechnicianPartStackScreens/BottomScreens/Chats';
import InspectionSheet from '../screens/TechnicianPartStackScreens/BottomScreens/InspectionSheet';
import JobCard from '../screens/TechnicianPartStackScreens/BottomScreens/JobCard';
import Location from '../screens/TechnicianPartStackScreens/BottomScreens/Location';
import Tickets from '../screens/TechnicianPartStackScreens/BottomScreens/Tickets/Tickets';

// Importing SVG components
import ChatsIcon from '../assets/Icons/Chats.svg';
import ChatsIconFocused from '../assets/Icons/ChatsFocused.svg';
import InspectionSheetIcon from '../assets/Icons/Inspection.svg';
import InspectionSheetIconFocused from '../assets/Icons/InspectionFocused.svg';
import JobCardIcon from '../assets/Icons/JobCard.svg';
import JobCardIconFocused from '../assets/Icons/JobCardFocused.svg';
import LocationIcon from '../assets/Icons/Location.svg';
import LocationIconFocused from '../assets/Icons/LocationFocused.svg';
import TicketIcon from '../assets/Icons/Tickets.svg';
import TicketIconFocused from '../assets/Icons/TicketsFocused.svg';

const {height, width} = Dimensions.get('window');
const isTablet = width >= 768; // Adjust for tablet screens
const TAB_BAR_HEIGHT = isTablet ? 80 : Platform.OS === 'ios' ? 90 : 75;
const TAB_BAR_PADDING = isTablet ? 15 : 10;

const Tab = createBottomTabNavigator();

const TechnicianBottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          backgroundColor: 'white',
          height: TAB_BAR_HEIGHT,
          paddingBottom: TAB_BAR_PADDING,
        },
        tabBarActiveTintColor: 'red',
        tabBarInactiveTintColor: 'gray',
        tabBarLabelStyle: {
          fontSize: isTablet ? 16 : 13, // Adjust font size based on screen size
          fontWeight: 'bold', // Optional: make text bold
        },
      }}>
      <Tab.Screen
        name="Tickets"
        component={Tickets}
        options={{
          headerShown: false,
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <TicketIconFocused width={24} height={24} fill="red" />
            ) : (
              <TicketIcon width={21} height={21} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Chats"
        component={Chats}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <ChatsIconFocused width={24} height={24} fill="red" />
            ) : (
              <ChatsIcon width={21} height={21} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Inspection"
        component={InspectionSheet}
        options={{
          tabBarLabel: ({color}) => (
            <Text
              style={{
                fontSize: isTablet ? 16 : 12,
                fontWeight: 'bold',
                textAlign: 'center',
                color,
                flexWrap: 'wrap', // Ensures wrapping
                width: 60, // Adjust width to allow text wrapping
              }}>
              Inspection
            </Text>
          ),
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <InspectionSheetIconFocused width={22} height={22} fill="red" />
            ) : (
              <InspectionSheetIcon width={18} height={18} fill={color} />
            ),
        }}
      />

      <Tab.Screen
        name="JobCard"
        component={JobCard}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <JobCardIconFocused width={24} height={24} fill="red" />
            ) : (
              <JobCardIcon width={21} height={21} fill={color} />
            ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({color, focused}) =>
            focused ? (
              <LocationIconFocused width={24} height={24} fill="red" />
            ) : (
              <LocationIcon width={21} height={21} fill={color} />
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TechnicianBottomTab;
