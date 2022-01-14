import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Alert, Button, SectionList, SafeAreaView, View, Text, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import Home from './Home';
import SettingsNav from './SettingsNav';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import  IconMaterial  from 'react-native-vector-icons/MaterialCommunityIcons';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { StackActions } from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function HomeNav({route, navigation}) {

  // const pwStr = route.params;

  // var password = pwStr.pwStr;



  return (
    <Tab.Navigator  

 
    screenOptions={{
     
      tabBarActiveTintColor: "white",
      headerStyle: {
        backgroundColor: '#183A81',
        borderWidth:0,
        shadowRadius: 0,
        shadowOffset: {
            height: 0,
        },
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      tabBarStyle: {
        height: 90,
        paddingHorizontal: 5,
        paddingTop: 0,
        backgroundColor: '#183A81',
        position: 'absolute',
        borderTopWidth: 0,
        
    },
    
    }}>
      <Tab.Screen name="Summary" component={Home} options={{
      tabBarLabel: 'Home',
      tabBarIcon: ({ color, size }) => (
        <IconMaterial name="home" color={color} size={size} />
      ),
    }}/>
        <Tab.Screen name="Settings" component={SettingsNav} options={{
      tabBarLabel: 'Settings',
      tabBarIcon: ({ color, size }) => (
        <Ionicons name="settings-outline" color={color} size={size} />
      ),
    }}/>
    </Tab.Navigator>
  );
}