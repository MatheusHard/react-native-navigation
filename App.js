/* eslint-disable prettier/prettier */
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { StyleSheet } from 'react-native';
import MainStack from './src/navigators/MainStack';
import MainTab from './src/navigators/MainTab';

export default () => 
  (
    <NavigationContainer>
      {/* <MainStack/> */}
      <MainTab/>
      </NavigationContainer>
  );


const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

