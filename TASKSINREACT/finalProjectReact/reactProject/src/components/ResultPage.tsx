import React from 'react';
import { useQuiz } from '../context/QuizContext';
import { useNavigate } from 'react-router-dom';
import './styles/ResultPage.css'

export default function ResultPage() {
  const { score, questions, restart, topicLabel } = useQuiz();
  const navigate = useNavigate();

  const handlePlayAgain = () => {
    restart();
    navigate('/');
  };

  return (
    <div className="result_container">
    {/* Название темы в левом верхнем углу */}
    <div className="result_topic_header">
      {topicLabel}
    </div>
  
    <div className="result_left">
      <p className="result_title">Quiz completed</p>
      <h2 className="result_subtitle">You scored...</h2>
    </div>
  
    <div className="result_card_items">
      <div className="result_card">
        {/* Название темы над баллом */}
        <div className="result_topic_in_card">
          {topicLabel}
        </div>
        <div className="result_score">{score}</div>
        <p className="result_total">out of {questions.length}</p>
      </div>
  
      <button className="result_btn" onClick={handlePlayAgain}>
        Play Again
      </button>
    </div>
  </div>
  
  );
}
