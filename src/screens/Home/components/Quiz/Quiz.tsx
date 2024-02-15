import React, {useState} from 'react';
import styled from 'styled-components/native';
import {H1, H2} from '../../../../components/Typography/Headings';
import Layout from '../../../../components/UI/Layout';
import {quizzes} from '../../../../constants/quiz';
import theme from '../../../../constants/theme';
import {LockClosedIcon} from 'react-native-heroicons/solid';

const QuizContainer = styled.View`
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)`
  margin-bottom: ${theme.spacing25};
`;

const LevelsWrapper = styled.View`\
  gap: ${theme.spacing20};
`;

const Level = styled.View<{notCompleted: Boolean}>`
  opacity: ${({notCompleted}) => (notCompleted ? 0.5 : 1)};
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing20};
  border-radius: ${theme.borderRadius20};
`;

const LevelHeading = styled(H2)`
  color: ${theme.greenBlack};
`;

const LockIcon = styled(LockClosedIcon)`
  position: absolute;
  right: ${theme.spacing20};
  top: ${theme.spacing20};
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
            <Level
              notCompleted={!completedLevels.includes(level.level)}
              key={level.level}>
              <LevelHeading>Level {level.level}</LevelHeading>
              {!completedLevels.includes(level.level) && (
                <LockIcon size={24} color={theme.greenBlack} />
              )}
            </Level>
          ))}
        </LevelsWrapper>
      </QuizContainer>
    </Layout>
  );
}
