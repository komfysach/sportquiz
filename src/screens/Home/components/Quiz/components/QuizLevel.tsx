import React, {useEffect, useState} from 'react';
import Layout from '../../../../../components/UI/Layout';
import styled from 'styled-components/native';
import {H1, H2, H3} from '../../../../../components/Typography/Headings';
import {quizzes} from '../../../../../constants/quiz';
import {ParagraphLarge} from '../../../../../components/Typography/Paragraph';
import theme from '../../../../../constants/theme';
import Button from '../../../../../components/UI/Button';
import {
  ArrowPathIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  XCircleIcon,
} from 'react-native-heroicons/outline';

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

const Question = styled(H2)``;

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
  const {id, level} = route.params;

  const [userPoints, setUserPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<{
    [id: string]: boolean;
  }>({});
  const [shuffledAnswers, setShuffledAnswers] = useState<any[]>([]);
  const [replayLevel, setReplayLevel] = useState(false);

  const quiz = quizzes.find(quizId => quizId.id === id);
  const levelData = quiz?.levels.find(lvl => lvl.level === level);

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

  const handleAnswer = (
    isCorrect: boolean,
    points: number,
    answerId: number,
  ) => {
    setAnsweredQuestions(prevState => {
      // Add the answer ID and its correctness to answeredQuestions
      const newAnsweredQuestions = {
        ...prevState,
        [answerId]: isCorrect,
      };

      // Calculate the number of answered questions based on the new state value
      const numAnsweredQuestions = Object.keys(newAnsweredQuestions).length;
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
  };

  useEffect(() => {
    setAnsweredQuestions({});
    setMessage('');
    setShuffledAnswers(
      shuffleArray(
        levelData?.sections[currentSection].questions[0].answers || [],
      ),
    );
  }, [currentSection, levelData?.sections]);

  const resetLevel = () => {
    setUserPoints(0);
    setCurrentSection(0);
    setReplayLevel(false);
    setAnsweredQuestions({});
  };

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
          {levelData?.sections[currentSection].questions.map(
            (question, questionIndex) => (
              <React.Fragment key={questionIndex}>
                <QuestionWrapper>
                  <Question>{question.question}</Question>
                </QuestionWrapper>
                {shuffledAnswers.map((answer, answerIndex) => (
                  <AnswerWrapper
                    isCorrect={answeredQuestions[answer.id]}
                    onPress={() => {
                      handleAnswer(answer.isCorrect, answer.points, answer.id);
                    }}
                    key={answerIndex}>
                    <Answer isCorrect={answeredQuestions[answer.id]}>
                      {answer.answer}
                    </Answer>
                    {!answer.isCorrect ? (
                      <XCircleIcon color={theme.greenBlack} size={25} />
                    ) : answer.isCorrect ? (
                      <CheckCircleIcon color={theme.greenBlack} size={25} />
                    ) : null}
                  </AnswerWrapper>
                ))}
              </React.Fragment>
            ),
          )}
        </SectionWrapper>
        <Bottom>
          <FeedbackContainer>
            <Feedback>{message}</Feedback>
          </FeedbackContainer>
          <ButtonContainer>
            <Button
              inActive={replayLevel}
              onPress={() => {
                setCurrentSection(currentSection + 1);
              }}
              label="Next"
              icon={<ArrowRightIcon size={20} color={theme.greenBlack} />}
            />
          </ButtonContainer>
        </Bottom>
      </LevelContainer>
    </Layout>
  );
}
