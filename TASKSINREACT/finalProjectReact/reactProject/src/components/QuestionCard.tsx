import React, { useState, useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import './styles/QuestionCard.css';

export default function QuestionCard() {
  const { questions, current, select, next, topicLabel } = useQuiz();
  const q = questions[current];

  const [chosen, setChosen] = useState<keyof typeof q.answers | ''>('');
  const [submitted, setSubmit] = useState(false);
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setChosen('');
    setSubmit(false);
    setShowError(false);
  }, [current]);

  const handleSubmit = () => {
    if (!chosen) {
      setShowError(true);
      return;
    }
    select(chosen);
    setSubmit(true);
  };

  const correctKey = Object.entries(q.correct_answers).find(
    ([_, v]) => v === 'true'
  )?.[0]?.slice(7, 8).toUpperCase();

  return (
    <div className='main'>
    <div className="question_card">
     
\
  
      <div className="question_card_title">
        <p className="question_card_title_number">
          Question {current + 1} / {questions.length}
        </p>
        <p className="question_card_title_name">{q.question}</p>
      </div>

    <div className='answer_list_part'>
      <div className="answer_list">
        {Object.entries(q.answers).map(([key, text]) => {
          if (!text) return null;
          const letter = key.replace('answer_', '').toUpperCase();
          const isChosen = chosen === letter;
          const isCorrect = letter === correctKey;

          let className = 'answer_option';
          if (submitted) {
            if (isCorrect) className += ' correct';
            else if (isChosen) className += ' wrong';
          } else if (isChosen) {
            className += ' selected';
          }

          return (
            <div
              key={key}
              className={className}
              onClick={() => !submitted && setChosen(letter as any)}
            >
              <span className="letter_box">{letter}</span>
              <span>{text}</span>
            </div>
          );
        })}
      </div>

 
      {!submitted ? (
        <button className="question_card_button" onClick={handleSubmit}>
          Submit Answer
        </button>
      ) : (
        <button className="question_card_button" onClick={next}>
          Next
        </button>
      )}


      {showError && !submitted && (
        <p className="error">Please select an answer</p>
      )}
      </div>
    </div>
    </div>
  );
}
