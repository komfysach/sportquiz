/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect} from 'react';
import {Dimensions} from 'react-native';
import {ArrowRightEndOnRectangleIcon} from 'react-native-heroicons/outline';
import styled from 'styled-components/native';
import {HomeParamList} from 'typings/Navigation';
import {getSports} from '../../../../actions/getSportCategories';
import {H1, H2, H4} from '../../../../components/Typography/Headings';
import Layout from '../../../../components/UI/Layout';
import theme from '../../../../constants/theme';
import {AppContext} from '../../../../context/AppContext';
import Category from './components/Category';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeContainer = styled.View`
  flex: 1;
  gap: ${theme.spacing20};
`;

const Top = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: ${theme.spacing20};
`;

const Left = styled.View``;

const Right = styled.View`
  align-items: flex-end;
`;

const ProfileWrapper = styled.TouchableOpacity`
  background-color: ${theme.greenBlack};
  padding: ${theme.spacing5};
  border: 1px solid ${theme.lightGreen};
  border-radius: ${theme.borderRadiusFull};
`;

const Intro = styled(H4)`
  font-family: ${theme.SpaceGrotesqueLight};
`;

const Name = styled(H2)``;

const QuestionWrapper = styled.View``;

const Question = styled(H1)``;

const screenWidth = Dimensions.get('screen').width;

const Categories = styled.View`
  flex-direction: row;
  gap: ${theme.spacing20};
  flex-wrap: wrap;
  width: ${screenWidth - 40}px;
  justify-content: space-between;
`;

export default function Home() {
  const navigation = useNavigation<NavigationProp<HomeParamList>>();
  const {sports, setSports, user, setUser} = useContext(AppContext);

  useEffect(() => {
    getSports().then(data => {
      if (data) {
        setSports(data);
      }
    });
  }, []);

  useEffect(() => {
    if (user === null) {
      navigation.navigate('Login');
    }
  }, [user]);

  const handleLogout = async () => {
    try {
      await AsyncStorage.removeItem('token');
      setUser(null);
    } catch (error) {
      console.error('Failed to remove the token from AsyncStorage:', error);
    }
  };

  return (
    <Layout>
      <HomeContainer testID="home-screen">
        <Top>
          <Left>
            <Intro>Hello,</Intro>
            <Name>{user?.name}</Name>
          </Left>
          <Right>
            <ProfileWrapper onPress={handleLogout}>
              <ArrowRightEndOnRectangleIcon
                size={30}
                color={theme.lightGreen}
              />
            </ProfileWrapper>
          </Right>
        </Top>
        <QuestionWrapper>
          <Question>What sport trivia would you like to tackle today?</Question>
        </QuestionWrapper>
        {/* <Search /> */}
        <Categories>
          {sports?.map((category, id) => (
            <Category category={category} key={id} />
          ))}
        </Categories>
      </HomeContainer>
    </Layout>
  );
}
