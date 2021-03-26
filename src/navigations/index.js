import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {Text} from 'react-native';

const AppNavigator = props => {
  return (
    <NavigationContainer>
      <Text>Hello World!!</Text>
    </NavigationContainer>
  );
};

export default AppNavigator;
