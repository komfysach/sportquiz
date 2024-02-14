import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Dimensions} from 'react-native';
import {
  HeartIcon as HeartIconOutline,
  HomeIcon as HomeIconOutline,
  TrophyIcon as TrophyIconOutline,
  UserCircleIcon as UserCircleIconOutline,
} from 'react-native-heroicons/outline';
import {
  HeartIcon as HeartIconSolid,
  HomeIcon as HomeIconSolid,
  TrophyIcon as TrophyIconSolid,
  UserCircleIcon as UserCircleIconSolid,
} from 'react-native-heroicons/solid';
import styled from 'styled-components/native';
import theme from '../constants/theme';
import HomeStack from '../screens/Home/HomeStack';
import RankingsStack from '../screens/Rankings/RankingsStack';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('screen').width;

const HomeWrapper = styled.View<{focused: Boolean}>`
  background-color: ${({focused}) =>
    focused ? theme.lightGreen : 'transparent'};
  padding: 10px;
  border-radius: 999px;
  margin-top: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

function getTabBarIcon(route: string, focused: boolean) {
  if (route === 'home') {
    return (
      <HomeWrapper focused={focused}>
        {focused ? (
          <HomeIconSolid color={theme.greenBlack} size={20} />
        ) : (
          <HomeIconOutline color={theme.lightGreen} size={20} />
        )}
        {focused ? <Text focused={focused}>Home</Text> : null}
      </HomeWrapper>
    );
  }
  if (route === 'rankings') {
    return (
      <HomeWrapper focused={focused}>
        {focused ? (
          <TrophyIconSolid color={theme.greenBlack} size={20} />
        ) : (
          <TrophyIconOutline color={theme.lightGreen} size={20} />
        )}
        {focused ? <Text focused={focused}>Rankings</Text> : null}
      </HomeWrapper>
    );
  }
  if (route === 'favourites') {
    return (
      <HomeWrapper focused={focused}>
        {focused ? (
          <HeartIconSolid color={theme.greenBlack} size={20} />
        ) : (
          <HeartIconOutline color={theme.lightGreen} size={20} />
        )}
        {focused ? <Text focused={focused}>Favourites</Text> : null}
      </HomeWrapper>
    );
  }
  if (route === 'profile') {
    return (
      <HomeWrapper focused={focused}>
        {focused ? (
          <UserCircleIconSolid color={theme.greenBlack} size={20} />
        ) : (
          <UserCircleIconOutline color={theme.lightGreen} size={20} />
        )}
        {focused ? <Text focused={focused}>Profile</Text> : null}
      </HomeWrapper>
    );
  }
  return null;
}

const Text = styled.Text<{focused: Boolean}>`
  color: ${({focused}) => (focused ? theme.greenBlack : theme.lightGreen)};
  font-size: ${theme.Paragraph12};
  font-family: ${theme.UrbanistSemiBold};
  letter-spacing: 0.5px;
`;

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
          tabBarLabel: () => null,
          tabBarStyle: {
            width: screenWidth - 10, // set width to screen width
            height: 70,
            paddingLeft: 7,
            paddingRight: 7,
            paddingBottom: 8,
            borderRadius: 999, // add border radius
            position: 'absolute', // position it absolutely
            bottom: 10, // lift it up slightly from the bottom
            left: 5, // align it to the left
            backgroundColor: '#1C1E1C', // white background
          },
        })}
        initialRouteName="home">
        <Tab.Screen name="home" component={HomeStack} />
        <Tab.Screen name="rankings" component={RankingsStack} />
        <Tab.Screen name="favourites" component={RankingsStack} />
        <Tab.Screen name="profile" component={RankingsStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
