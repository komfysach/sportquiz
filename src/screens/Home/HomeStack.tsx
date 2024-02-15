import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Profile from './components/Profile/Profile';
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
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </>
  );
}
