import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Rankings from './components/Rankings';

const Stack = createStackNavigator();

export default function RankingsStack() {
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="Rankings">
        <>
          <Stack.Group>
            <Stack.Screen name="Rankings" component={Rankings} />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </>
  );
}
