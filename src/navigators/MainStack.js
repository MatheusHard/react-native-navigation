/* eslint-disable prettier/prettier */
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AboutScreen from '../pages/AboutScreen';
import HomeScreen from '../pages/HomeScreen';


const Stack = createNativeStackNavigator();

export default () =>  (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="About" component={AboutScreen} />
    </Stack.Navigator>
  );

