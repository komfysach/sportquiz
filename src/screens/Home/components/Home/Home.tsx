import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../../constants/theme';
import {H1, H2, H4} from '../../../../components/Typography/Headings';
import Search from '../../../../components/UI/Search';
import Layout from '../../../../components/UI/Layout';
import {Dimensions} from 'react-native';
import Category from './components/Category';
import {CategoryType} from 'typings/CategoryType';
import {UserIcon} from 'react-native-heroicons/outline';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {HomeParamList} from 'typings/Navigation';

const sportCategories: CategoryType[] = [
  {
    id: 1,
    name: 'Football',
    icon: require('../../../../../assets/images/football.png'),
  },
  {
    id: 2,
    name: 'Basketball',
    icon: require('../../../../../assets/images/basketball.png'),
  },
  {
    id: 3,
    name: 'Baseball',
    icon: require('../../../../../assets/images/baseball.png'),
  },
  {
    id: 4,
    name: 'Rugby',
    icon: require('../../../../../assets/images/rugby.png'),
  },
];

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

  const handleProfilePress = () => {
    navigation.navigate('Profile');
  };
  return (
    <Layout>
      <HomeContainer testID="home-screen">
        <Top>
          <Left>
            <Intro>Hello</Intro>
            <Name>Sachin Lendis</Name>
          </Left>
          <Right>
            <ProfileWrapper onPress={handleProfilePress}>
              <UserIcon size={30} color={theme.lightGreen} />
            </ProfileWrapper>
          </Right>
        </Top>
        <QuestionWrapper>
          <Question>What sport trivia would you like to tackle today?</Question>
        </QuestionWrapper>
        <Search />
        <Categories>
          {sportCategories.map(category => (
            <Category category={category} key={category.id} />
          ))}
        </Categories>
      </HomeContainer>
    </Layout>
  );
}
