import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../../constants/theme';
import {H1, H2, H4} from '../../../../components/Typography/Headings';
import Search from '../../../../components/UI/Search';
import Layout from '../../../../components/UI/Layout';
import {Dimensions} from 'react-native';
import Category from './components/Category';
import {CategoryType} from 'typings/CategoryType';

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

const Top = styled.View``;

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
  return (
    <Layout>
      <HomeContainer testID="home-screen">
        <Top>
          <Intro>Hello</Intro>
          <Name>Sachin Lendis</Name>
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
