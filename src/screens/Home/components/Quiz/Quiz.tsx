import React, {useState} from 'react';
import styled from 'styled-components/native';
import {H1, H2} from '../../../../components/Typography/Headings';
import Layout from '../../../../components/UI/Layout';
import {quizzes} from '../../../../constants/quiz';
import theme from '../../../../constants/theme';

const QuizContainer = styled.View`
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)`
  margin-bottom: ${theme.spacing25};
`;

const LevelsWrapper = styled.View`\
  gap: ${theme.spacing20};
`;

const Level = styled.View`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing20};
  border-radius: ${theme.borderRadius20};
`;

const LevelHeading = styled(H2)`
  color: ${theme.greenBlack};
`;

export default function Quiz({route}: {route: any}) {
  const {id} = route.params;
  const quiz = quizzes.find(quizId => quizId.id === id);
  const [completedLevels, setCompletedLevels] = useState([1]);
  return (
    <Layout backLink>
      <QuizContainer>
        <Heading>{quiz?.sport}</Heading>
        <LevelsWrapper>
          {quiz?.levels.map(level => (
            <Level key={level.level}>
              <LevelHeading>Level {level.level}</LevelHeading>
            </Level>
          ))}
        </LevelsWrapper>
      </QuizContainer>
    </Layout>
  );
}
