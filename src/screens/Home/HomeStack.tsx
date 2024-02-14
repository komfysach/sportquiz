import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home';
import Baseball from './components/Baseball/Baseball';
const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Home">
        <>
          <Stack.Group>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Baseball" component={Baseball} />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </>
  );
}
