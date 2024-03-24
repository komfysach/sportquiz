import {createStackNavigator} from '@react-navigation/stack';
import React, {useContext} from 'react';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Quiz from './components/Quiz/Quiz';
import QuizLevel from './components/Quiz/components/QuizLevel';
import {AppContext} from '../../context/AppContext';

const Stack = createStackNavigator();

export default function HomeStack() {
  const {isFinishedLoggingIn} = useContext(AppContext);
  return (
    <>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName={isFinishedLoggingIn ? 'Home' : 'Login'}>
        <>
          <Stack.Group>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Quiz" component={Quiz} />
            <Stack.Screen name="QuizLevel" component={QuizLevel} />
          </Stack.Group>
        </>
      </Stack.Navigator>
    </>
  );
}
