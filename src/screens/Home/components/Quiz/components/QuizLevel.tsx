/* eslint-disable react-hooks/exhaustive-deps */
import {NavigationProp, useNavigation} from '@react-navigation/native';
import React, {useContext, useEffect, useState} from 'react';
import {
  ArrowPathIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
} from 'react-native-heroicons/outline';
import styled from 'styled-components/native';
import {QuizParamList} from 'typings/Navigation';
import {QuestionType} from 'typings/QuestionType';
import {getQuestionsWithId} from '../../../../../actions/getQuestionsWithId';
import {getUserProgress} from '../../../../../actions/getUserProgress';
import {updateUserProgress} from '../../../../../actions/updateUserProgress';
import {H1, H3} from '../../../../../components/Typography/Headings';
import {ParagraphLarge} from '../../../../../components/Typography/Paragraph';
import Button from '../../../../../components/UI/Button';
import Layout from '../../../../../components/UI/Layout';
import theme from '../../../../../constants/theme';
import {AppContext} from '../../../../../context/AppContext';

const LevelContainer = styled.View`
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)``;

const PointsWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Points = styled(H3)``;

const SectionWrapper = styled.View`
  gap: ${theme.spacing20};
`;

const QuestionWrapper = styled.View`
  margin-bottom: ${theme.spacing10};
`;

const Question = styled(ParagraphLarge)``;

const AnswersContainer = styled.ScrollView`
  max-height: 250px;
`;

const AnswerWrapper = styled.TouchableOpacity<{isCorrect?: Boolean}>`
  padding: ${theme.spacing15};
  background-color: ${({isCorrect}) =>
    isCorrect === undefined
      ? 'transparent'
      : isCorrect
      ? theme.green
      : theme.purple};
  border: ${({isCorrect}) =>
    isCorrect
      ? `2px solid ${theme.green}`
      : isCorrect === undefined
      ? `1px solid ${theme.lightGreen}`
      : `2px solid ${theme.purple}`};
  border-radius: ${theme.borderRadius15};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${theme.spacing10};
`;

const Answer = styled(ParagraphLarge)<{isCorrect?: Boolean}>`
  color: ${({isCorrect}) =>
    isCorrect === undefined ? theme.lightGreen : theme.greenBlack};
`;

const ButtonContainer = styled.View`
  margin-top: ${theme.spacing20};
  align-items: flex-end;
`;

const FeedbackContainer = styled.View``;

const Feedback = styled(ParagraphLarge)`
  color: ${theme.lightGreen};
  padding: ${theme.spacing10};
  margin-top: ${theme.spacing20};
`;

const Bottom = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ReplayWrapper = styled.TouchableOpacity`
  background-color: ${theme.lightGreen};
  padding: ${theme.spacing15};
  border-radius: ${theme.borderRadiusFull};
`;

export default function QuizLevel({route}: {route: any}) {
  const {sport, level} = route.params;
  const {user} = useContext(AppContext);
  const [userPoints, setUserPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [currentSection, setCurrentSection] = useState(1);
  const [answeredQuestions, setAnsweredQuestions] = useState<string[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<any[]>([]);
  const [replayLevel, setReplayLevel] = useState(false);
  const [disableNext, setDisableNext] = useState(true);
  const [quiz, setQuiz] = useState<QuestionType[]>([]);

  const navigation = useNavigation<NavigationProp<QuizParamList>>();

  // update user progress when the component mounts
  useEffect(() => {
    // Fetch the current points for the user from the database.
    const fetchCurrentPoints = async () => {
      const currentProgress = await getUserProgress(user?.id!);
      const currentPoints =
        currentProgress
          ?.map(progress => progress.points)
          .reduce((acc, curr) => acc + curr, 0) || 0;
      const newPoints = currentPoints + userPoints;
      updateUserProgress(sport, level, user?.id!, newPoints);
    };
    fetchCurrentPoints();
  }, []);

  // get the questions for the current section, if there are no questions left,
  // update the user progress and navigate to the quiz screen
  useEffect(() => {
    getQuestionsWithId(sport, level, currentSection).then(data => {
      if (data && Object.keys(data).length > 0) {
        setQuiz(data);
      } else {
        // Fetch the current points for the user from the database.
        const fetchCurrentPoints = async () => {
          const currentProgress = await getUserProgress(user?.id!);
          const currentPoints =
            currentProgress
              ?.map(progress => progress.points)
              .reduce((acc, curr) => acc + curr, 0) || 0;
          const newPoints = currentPoints + userPoints;
          updateUserProgress(sport, level + 1, user?.id!, newPoints);
          navigation.navigate('Quiz', {id: sport});
        };
        fetchCurrentPoints();
      }
    });
  }, [currentSection, navigation]);

  // shuffle the answers, so they are displayed in a random order
  function shuffleArray(array: any[]) {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  }

  // handle the answer, check if the answer is correct and update the user points
  const handleAnswer = (
    answer: string,
    correctAnswer: string,
    points: number,
  ) => {
    setAnsweredQuestions(prevState => {
      // Add the answer to answeredQuestions
      const newAnsweredQuestions = [...prevState, answer];

      // Check if the correct answer is in the new answeredQuestions array
      const isCorrect = newAnsweredQuestions.includes(correctAnswer);

      // Calculate the number of answered questions based on the new state value
      const numAnsweredQuestions = newAnsweredQuestions.length;
      if (
        isCorrect &&
        (numAnsweredQuestions === 1 || numAnsweredQuestions === 2)
      ) {
        if (numAnsweredQuestions === 1) {
          setUserPoints(userPoints + points);
        }
        if (numAnsweredQuestions === 2) {
          setUserPoints(userPoints + points / 2);
        }
        setMessage('Well done! Keep going!');
      }
      if (!isCorrect && numAnsweredQuestions === 1) {
        setMessage('Aaah too bad! Try again!');
      }
      if (!isCorrect && numAnsweredQuestions === 2) {
        setMessage('Sorry, you lost!');
        setReplayLevel(true);
      }
      return newAnsweredQuestions;
    });
    console.log('answeredQuestions', answeredQuestions);
  };

  useEffect(() => {
    console.log('answeredQuestions', answeredQuestions);
  }, [answeredQuestions]);

  // process the quiz data and shuffle the answers
  useEffect(() => {
    const processQuiz = (quizData: QuestionType[]) => {
      quizData.forEach(question => {
        const answers = [
          'answer_a',
          'answer_b',
          'answer_c',
          'answer_d',
          'answer_e',
        ]
          .map(key => question[key as keyof QuestionType])
          .filter(answer => answer !== null);

        setShuffledAnswers(shuffleArray(answers));
      });
    };

    processQuiz(quiz);
  }, [quiz]);

  // reset the level
  const resetLevel = () => {
    setUserPoints(0);
    setCurrentSection(0);
    setReplayLevel(false);
    setDisableNext(true);
    setAnsweredQuestions([]);
  };

  useEffect(() => {
    if (message === 'Well done! Keep going!') {
      setDisableNext(false);
    } else {
      setDisableNext(true);
    }
  }, [message, replayLevel, currentSection]);

  return (
    <Layout backLink>
      <LevelContainer>
        <Heading>{level}</Heading>
        <PointsWrapper>
          <Points>Your score: {userPoints}</Points>
          {replayLevel && (
            <ReplayWrapper onPress={resetLevel}>
              <ArrowPathIcon size={25} color={theme.greenBlack} />
            </ReplayWrapper>
          )}
        </PointsWrapper>
        <SectionWrapper>
          {quiz.map((question, questionIndex) => (
            <React.Fragment key={questionIndex}>
              <QuestionWrapper>
                <Question>{question.question_text}</Question>
              </QuestionWrapper>
              <AnswersContainer>
                {shuffledAnswers.map((answer, answerIndex) => (
                  <AnswerWrapper
                    isCorrect={
                      answeredQuestions.includes(answer)
                        ? answer === question.correct_answer
                          ? true
                          : false
                        : undefined
                    }
                    onPress={() => {
                      handleAnswer(
                        answer,
                        question.correct_answer,
                        question.points,
                      );
                    }}
                    key={answerIndex}>
                    <Answer
                      isCorrect={
                        answeredQuestions.includes(answer)
                          ? answer === question.correct_answer
                            ? true
                            : false
                          : undefined
                      }>
                      {answer}
                    </Answer>
                    {!answeredQuestions.includes(answer) ||
                    answer !== question.correct_answer ? (
                      <XCircleIcon color={theme.greenBlack} size={25} />
                    ) : answeredQuestions.includes(answer) &&
                      answer === question.correct_answer ? (
                      <CheckCircleIcon color={theme.greenBlack} size={25} />
                    ) : null}
                  </AnswerWrapper>
                ))}
              </AnswersContainer>
            </React.Fragment>
          ))}
        </SectionWrapper>
        <Bottom>
          <FeedbackContainer>
            <Feedback>{message}</Feedback>
          </FeedbackContainer>
          <ButtonContainer>
            {disableNext ? null : (
              <Button
                inActive={replayLevel}
                onPress={() => {
                  setCurrentSection(currentSection + 1);
                  setAnsweredQuestions([]);
                  setMessage('');
                }}
                label="Next"
                icon={<ArrowRightIcon size={20} color={theme.greenBlack} />}
              />
            )}
          </ButtonContainer>
        </Bottom>
      </LevelContainer>
    </Layout>
  );
}
