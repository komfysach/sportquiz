/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {LockClosedIcon} from 'react-native-heroicons/solid';
import styled from 'styled-components/native';
import {QuizLevelParamList} from 'typings/Navigation';
import {H1, H3} from '../../../../components/Typography/Headings';
import Layout from '../../../../components/UI/Layout';
import theme from '../../../../constants/theme';
import {getLevelsWithSportId} from '../../../../actions/getLevelsWithId';
import {AppContext} from '../../../../context/AppContext';
import {getUserProgress} from '../../../../actions/getUserProgress';
import {LevelType} from 'typings/LevelType';
import {updateUserProgress} from '../../../../actions/updateUserProgress';
import {UserProgressType} from 'typings/UserProgressType';

const QuizContainer = styled.View`
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)`
  margin-bottom: ${theme.spacing25};
`;

const LevelsWrapper = styled.View`
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
  const {levels, setLevels, sports, userProgress, setUserProgress, user} =
    useContext(AppContext);
  const navigation = useNavigation<NavigationProp<QuizLevelParamList>>();
  const quiz = sports?.find(sport => sport.sport_id === id);
  const [completedLevels, setCompletedLevels] = useState<number[]>([1]);
  const handleLevelPress = (level: LevelType) => {
    if (completedLevels.includes(level.level_number)) {
      navigation.navigate('QuizLevel', {sport: id, level: level?.level_number});
    } else {
      null;
    }
  };

  const initialUserProgress = {
    sport_id: id,
    current_level: 1,
    player_id: user?.id!,
    points: 0,
  };

  useEffect(() => {
    getUserProgress(user?.id!)
      .then(data => {
        if (data) {
          if (JSON.stringify(data) !== JSON.stringify(initialUserProgress)) {
            setUserProgress(data);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching user progress:', error);
        // Handle error appropriately
      });
  }, []);

  return (
    <Layout backLink>
      <QuizContainer>
        <Heading>{quiz?.sport_name}</Heading>
        <LevelsWrapper>
          {levels?.map(level => (
            <Level
              onPress={() => handleLevelPress(level)}
              notCompleted={!completedLevels.includes(level?.level_number)}
              key={level?.level_number}>
              <LevelHeading>Level {level?.level_number}</LevelHeading>
              {!completedLevels.includes(level?.level_number) && (
                <LockIcon size={24} color={theme.greenBlack} />
              )}
            </Level>
          ))}
        </LevelsWrapper>
      </QuizContainer>
    </Layout>
  );
}
