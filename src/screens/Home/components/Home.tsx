import React from 'react';
import styled from 'styled-components/native';
import theme from '../../../constants/theme';
import {H1, H2, H4} from '../../../components/Typography/Headings';
import Search from '../../../components/UI/Search';
import Layout from '../../../components/UI/Layout';

const sportCategories = [
  {
    id: 1,
    name: 'Football',
    icon: require('../../../../assets/images/football.png'),
  },
  {
    id: 2,
    name: 'Basketball',
    icon: require('../../../../assets/images/basketball.png'),
  },
  {
    id: 3,
    name: 'Baseball',
    icon: require('../../../../assets/images/baseball.png'),
  },
  {
    id: 4,
    name: 'Rugby',
    icon: require('../../../../assets/images/rugby.png'),
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

const Categories = styled.View`
  flex-direction: row;
  gap: ${theme.spacing25};
  flex-wrap: wrap;
`;

const CateogryContainer = styled.View`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing10};
  border-radius: ${theme.borderRadius20};
  align-items: center;
  justify-content: space-between;
  gap: ${theme.spacing5};
`;

const Image = styled.Image`
  width: 150px;
  height: 150px;
`;

export default function Home() {
  return (
    <Layout>
      <HomeContainer>
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
            <CateogryContainer key={category.id}>
              <Image source={category.icon} />
              <H4>{category.name}</H4>
            </CateogryContainer>
          ))}
        </Categories>
      </HomeContainer>
    </Layout>
  );
}
