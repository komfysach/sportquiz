import React, {useContext} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './components/Home/Home';
import Quiz from './components/Quiz/Quiz';
import Profile from './components/Profile/Profile';
import QuizLevel from './components/Quiz/components/QuizLevel';
import Login from './components/Login/Login';
import {AppContext} from '../../context/AppContext';
const Stack = createStackNavigator();

export default function HomeStack() {
  const {isFinishedOnboarding} = useContext(AppContext);
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isFinishedOnboarding ? 'Home' : 'AddName'}>
        <>
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="QuizLevel" component={QuizLevel} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </>
  );
}
