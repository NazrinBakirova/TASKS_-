import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';

export default function QuestionCard() {
  const { questions, current, select, next } = useQuiz();
  const q = questions[current];

  const [chosen, setChosen]    = useState<keyof typeof q.answers | ''>('');
  const [submitted, setSubmit] = useState(false);

  /* ⬇️ сбрасываем выбор/отправку при каждом новом вопросе */
  useEffect(() => {
    setChosen('');
    setSubmit(false);
  }, [current]);        // ← зависимость - индекс текущего вопроса

  const handleSubmit = () => {
    if (!chosen) return;
    select(chosen);     // отмечаем ответ в контексте
    setSubmit(true);    // блокируем выбор
  };

  return (
    <div>
      <h2>Question {current + 1} / {questions.length}</h2>
      <p>{q.question}</p>

      {Object.entries(q.answers).map(([key, text]) =>
        text && (
          <label key={key} style={{ display: 'block', margin: '4px 0' }}>
            <input
              type="radio"
              name="answer"
              disabled={submitted}
              checked={chosen === key}
              onChange={() => setChosen(key as any)}
            />
            {text}
          </label>
        )
      )}

      {!submitted ? (
        <button onClick={handleSubmit} disabled={!chosen}>Submit Answer</button>
      ) : (
        <button onClick={next}>Next</button>
      )}
    </div>
  );
}
