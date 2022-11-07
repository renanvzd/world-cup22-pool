import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import { SignIn } from '../screens/SignIn';

import { AppRoutes } from './app.routes';

export function Routes() {
  return (
    <NavigationContainer>
      {/* <AppRoutes /> */}
      <SignIn />
    </NavigationContainer>
  )
}