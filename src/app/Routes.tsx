/* eslint-disable react-hooks/exhaustive-deps */
import AsyncStorage from '@react-native-async-storage/async-storage';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
import {
  HomeIcon as HomeIconOutline,
  TrophyIcon as TrophyIconOutline,
} from 'react-native-heroicons/outline';
import {
  HomeIcon as HomeIconSolid,
  TrophyIcon as TrophyIconSolid,
} from 'react-native-heroicons/solid';
import styled from 'styled-components/native';
import {getPlayerByToken} from '../actions/getPlayerByToken';
import {getPlayers} from '../actions/getPlayers';
import theme from '../constants/theme';
import {AppContext} from '../context/AppContext';
import HomeStack from '../screens/Home/HomeStack';
import RankingsStack from '../screens/Rankings/components/Rankings';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('screen').width;

const HomeWrapper = styled.View<{focused: Boolean}>`
  background-color: ${({focused}) =>
    focused ? theme.greenBlack : 'transparent'};
  padding: ${theme.spacing10};
  border-radius: ${theme.borderRadiusFull};
  margin-top: ${theme.spacing10};
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: ${theme.spacing5};
`;

export function getTabBarIcon(route: string, focused: boolean) {
  if (route === 'home') {
    return (
      <HomeWrapper focused={focused}>
        {focused ? (
          <HomeIconSolid
            testID="home-icon-solid"
            color={theme.lightGreen}
            size={20}
          />
        ) : (
          <HomeIconOutline color={theme.greenBlack} size={20} />
        )}
        {focused ? <Text focused={focused}>Home</Text> : null}
      </HomeWrapper>
    );
  }
  if (route === 'rankings') {
    return (
      <HomeWrapper focused={focused}>
        {focused ? (
          <TrophyIconSolid
            testID="trophy-icon-solid"
            color={theme.lightGreen}
            size={20}
          />
        ) : (
          <TrophyIconOutline color={theme.greenBlack} size={20} />
        )}
        {focused ? <Text focused={focused}>Rankings</Text> : null}
      </HomeWrapper>
    );
  }

  return null;
}

const Text = styled.Text<{focused?: Boolean}>`
  color: ${({focused}) => (focused ? theme.lightGreen : theme.greenBlack)};
  font-size: ${theme.Paragraph12};
  font-family: ${theme.UrbanistSemiBold};
  letter-spacing: 0.5px;
`;

export default function Routes() {
  const {setUser, setIsFinishedLoggingIn, setPlayers} = useContext(AppContext);
  const [loading, setLoading] = useState(true);

  const checkToken = async () => {
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null) {
        setIsFinishedLoggingIn(true);
        getPlayerByToken(value).then(data => {
          if (data) {
            setUser(data);
          }
        });
      }
    } catch (e) {
      console.error('Error getting token:', e);
    }
  };

  useEffect(() => {
    checkToken();
    getPlayers().then(data => {
      if (data) {
        setPlayers(data);
      }
    });
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <>
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({route}) => ({
              headerShown: false,
              tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
              tabBarLabel: () => null,
              tabBarStyle: {
                width: screenWidth - 100, // set width to screen width
                height: 70,
                paddingLeft: 7,
                paddingRight: 7,
                paddingBottom: 8,
                borderRadius: 999, // add border radius
                position: 'absolute', // position it absolutely
                bottom: 10, // lift it up slightly from the bottom
                left: 50, // align it to the left
                right: 50, // align it to the right
                backgroundColor: '#EEFFEE',
              },
            })}
            initialRouteName="home">
            <Tab.Screen name="home" component={HomeStack} />
            <Tab.Screen name="rankings" component={RankingsStack} />
          </Tab.Navigator>
        </NavigationContainer>
      )}
    </>
  );
}
