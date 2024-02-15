import React, {useState} from 'react';
import Layout from '../../../../../components/UI/Layout';
import styled from 'styled-components/native';
import {H1, H3} from '../../../../../components/Typography/Headings';
import {quizzes} from '../../../../../constants/quiz';
import {ParagraphLarge} from '../../../../../components/Typography/Paragraph';

const LevelContainer = styled.View``;

const Heading = styled(H1)``;

const PointsWrapper = styled.View``;

const Points = styled(H3)``;

const SectionWrapper = styled.View``;

const Question = styled(ParagraphLarge)``;

const AnswersWrapper = styled.View``;

const AnswerWrapper = styled.TouchableOpacity``;

const Answer = styled(ParagraphLarge)``;

export default function QuizLevel({route}: {route: any}) {
  const {id, level} = route.params;
  const [userPoints, setUserPoints] = useState(0);
  const [message, setMessage] = useState('');
  const [currentSection, setCurrentSection] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const quiz = quizzes.find(quizId => quizId.id === id);
  const levelData = quiz?.levels.find(lvl => lvl.level === level);
  const handleAnswer = (isCorrect: boolean, points: number) => {
    if (isCorrect && (answeredQuestions === 1 || answeredQuestions === 2)) {
      if (answeredQuestions === 1) {
        setUserPoints(userPoints + points);
      }
      if (answeredQuestions === 2) {
        setUserPoints(userPoints + points / 2);
      }
      setMessage('Well done! Keep going!');
    }
    if (!isCorrect && answeredQuestions === 1) {
      setMessage('Aaah too bad! Try again!');
    }
    if (!isCorrect && answeredQuestions === 2) {
      setMessage('Sorry, you lost!');
    }
    setAnsweredQuestions(answeredQuestions + 1);
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
                <Question>{question.question}</Question>
                {question.answers.map((answer, answerIndex) => (
                  <AnswerWrapper key={answerIndex}>
                    <Answer>{answer.answer}</Answer>
                  </AnswerWrapper>
                ))}
              </React.Fragment>
            ),
          )}
        </SectionWrapper>
      </LevelContainer>
    </Layout>
  );
}
