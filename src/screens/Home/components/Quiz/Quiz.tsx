import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {LockClosedIcon} from 'react-native-heroicons/solid';
import styled from 'styled-components/native';
import {QuizLevelParamList} from 'typings/Navigation';
import {H1, H3} from '../../../../components/Typography/Headings';
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

const Level = styled.TouchableOpacity<{notCompleted: Boolean}>`
  opacity: ${({notCompleted}) => (notCompleted ? 0.5 : 1)};
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing20};
  border-radius: ${theme.borderRadius20};
`;

const LevelHeading = styled(H3)`
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
  const [completedLevels, setCompletedLevels] = useState<Array<string>>([
    'Simple - These are just tap ins',
  ]);
  const navigation = useNavigation<NavigationProp<QuizLevelParamList>>();
  const handleLevelPress = (level: string) => {
    if (completedLevels.includes(level)) {
      navigation.navigate('QuizLevel', {id: id, level: level});
    } else {
      null;
    }
  };

  return (
    <Layout backLink>
      <QuizContainer>
        <Heading>{quiz?.sport}</Heading>
        <LevelsWrapper>
          {quiz?.levels.map(level => (
            <Level
              onPress={() => handleLevelPress(level.level)}
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
