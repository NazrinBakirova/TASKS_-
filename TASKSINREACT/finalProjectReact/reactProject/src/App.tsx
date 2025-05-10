import React from 'react';
import { QuizProvider, useQuiz } from './context/QuizContext';
import MainPage     from './components/MainPage';
import QuestionCard from './components/QuestionCard';
import ResultPage   from './components/ResultPage';

const Screens = () => {
  const { questions, current } = useQuiz();

  if (questions.length === 0)     
         return <MainPage />;
  if (current < questions.length)   
         return <QuestionCard />;
  return <ResultPage />;
};

export default function App() {
  return (
    <QuizProvider>
      <Screens />
    </QuizProvider>
  );
}
