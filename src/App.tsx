import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Splash, GetStarted } from './pages';

export default function App() {
  return (
    <NavigationContainer>
      <GetStarted />
    </NavigationContainer>
  );
}
