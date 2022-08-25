/* eslint-disable prettier/prettier */

import React from "react";

import { Image } from "react-native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabHomeScreen from "../pages/TabHomeScreen";
import TabAboutScreen from "../pages/TabAboutScreen";
import TabBarIcon from "./TabBarIcon";

const Tab = createBottomTabNavigator();

export default ()=>(
    <Tab.Navigator 
    screenOptions={({route})=>({
        tabBarIcon: ()=><TabBarIcon name={route.name}/>
    })}
    >
        <Tab.Screen name="TabHome" component={TabHomeScreen}/>
        <Tab.Screen name="TabAbout" component={TabAboutScreen}/>

    </Tab.Navigator>
);