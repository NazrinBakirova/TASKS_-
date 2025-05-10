import React, { useEffect } from 'react';
import { useFetchQuestions } from '../hooks/useFetchQuestions';
import { useQuiz }           from '../context/QuizContext';

export default function QuizLoader({ category }: { category: string }) {
  const { data, loading, error } = useFetchQuestions(category);
  const { startQuiz }            = useQuiz();

  useEffect(() => {
    if (data) startQuiz(data);
  }, [data]);

  if (loading) return <p>Загрузка…</p>;
  if (error)   return <p>Ошибка: {error}</p>;

  return null; // управление перейдёт к QuestionCard
}
