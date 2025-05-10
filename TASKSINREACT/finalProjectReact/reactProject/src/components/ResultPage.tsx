import React from 'react';
import { useQuiz } from '../context/QuizContext';

export default function ResultPage() {
  const { score, questions, restart } = useQuiz();

  return (
    <div>
      <h1>Готово!</h1>
      <p>Вы набрали {score} из {questions.length}</p>
      <button onClick={restart}>Сыграть ещё</button>
    </div>
  );
}
