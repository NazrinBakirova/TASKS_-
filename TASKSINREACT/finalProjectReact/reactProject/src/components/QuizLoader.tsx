import React, { useEffect } from 'react';
import { useFetchQuestions } from '../hooks/useFetchQuestions';
import { useQuiz }           from '../context/QuizContext';

export default function QuizLoader({ category }: { category: string }) {
  const { data, loading, error } = useFetchQuestions(category);
  const { startQuiz }            = useQuiz();

  useEffect(() => {
    if (data) startQuiz(data);
  }, [data]);

  if (loading) return <p>loading...</p>;
  if (error)   return <p>error: {error}</p>;

  return null;
}
