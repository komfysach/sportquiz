import React, {useState} from 'react';
import Layout from '../../../../../components/UI/Layout';
import styled from 'styled-components/native';
import {H1, H2, H3} from '../../../../../components/Typography/Headings';
import {quizzes} from '../../../../../constants/quiz';
import {ParagraphLarge} from '../../../../../components/Typography/Paragraph';
import theme from '../../../../../constants/theme';
import Button from '../../../../../components/UI/Button';
import {ArrowRightIcon} from 'react-native-heroicons/outline';

const LevelContainer = styled.View`
  gap: ${theme.spacing20};
`;

const Heading = styled(H1)``;

const PointsWrapper = styled.View``;

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
    isCorrect === undefined ? theme.lightGreen : 'transparent'};
  border: ${({isCorrect}) =>
    isCorrect
      ? `2px solid ${theme.green}`
      : isCorrect === undefined
      ? 'none'
      : `2px solid ${theme.purple}`};
  border-radius: ${theme.borderRadius15};
`;

const Answer = styled(ParagraphLarge)<{isCorrect?: Boolean}>`
  color: ${({isCorrect}) =>
    isCorrect
      ? theme.green
      : isCorrect === undefined
      ? theme.greenBlack
      : theme.purple};
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

export default function QuizLevel({route}: {route: any}) {
  const {id, level} = route.params;

  const [userPoints, setUserPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<{
    [id: string]: boolean;
  }>({});

  const quiz = quizzes.find(quizId => quizId.id === id);
  const levelData = quiz?.levels.find(lvl => lvl.level === level);

  const handleAnswer = (
    isCorrect: boolean,
    points: number,
    answerId: number,
  ) => {
    // Add the answer ID and its correctness to answeredQuestions
    setAnsweredQuestions({
      ...answeredQuestions,
      [answerId]: isCorrect,
    });

    // Calculate the number of answered questions
    const numAnsweredQuestions = Object.keys(answeredQuestions).length;
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
    }
  };

  return (
    <Layout backLink>
      <LevelContainer>
        <Heading>
          {quiz?.sport} - Level {level}
        </Heading>
        <PointsWrapper>
          <Points>Your score: {userPoints}</Points>
        </PointsWrapper>
        <SectionWrapper>
          {levelData?.sections[currentSection].questions.map(
            (question, questionIndex) => (
              <React.Fragment key={questionIndex}>
                <QuestionWrapper>
                  <Question>{question.question}</Question>
                </QuestionWrapper>
                {question.answers.map((answer, answerIndex) => (
                  <AnswerWrapper
                    isCorrect={answeredQuestions[answer.id]}
                    key={answerIndex}>
                    <Answer
                      isCorrect={answeredQuestions[answer.id]}
                      onPress={() =>
                        handleAnswer(answer.isCorrect, answer.points, answer.id)
                      }>
                      {answer.answer}
                    </Answer>
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
              label="Next"
              icon={<ArrowRightIcon size={20} color={theme.greenBlack} />}
            />
          </ButtonContainer>
        </Bottom>
      </LevelContainer>
    </Layout>
  );
}
