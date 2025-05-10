import React , { createContext, useContext, useState, type ReactNode } from 'react';
import type { Question } from '../types/types';

interface QuizCtx {
  questions: Question[];
  current:   number;
  score:     number;
  startQuiz: (qs: Question[]) => void;
  select:    (key: keyof Question['answers']) => void;
  next:      () => void;
  restart:   () => void;
}

const QuizContext = createContext<QuizCtx | null>(null);

export const QuizProvider = ({ children }: { children: ReactNode }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [current,   setCurrent]   = useState(0);
  const [score,     setScore]     = useState(0);

  const startQuiz = (qs: Question[]) => {
    setQuestions(qs);
    setCurrent(0);
    setScore(0);
  };

  const select = (key: keyof Question['answers']) => {
    const q     = questions[current];
    const akey  = `answer_${key.toLowerCase()}_correct` as keyof typeof q.correct_answers;
    if (q.correct_answers[akey] === 'true') setScore(s => s + 1);
  };

  const next    = () => setCurrent(i => i + 1);
  const restart = () => { setQuestions([]); setCurrent(0); setScore(0); };

  return (
    <QuizContext.Provider value={{ questions, current, score, startQuiz, select, next, restart }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const ctx = useContext(QuizContext);
  if (!ctx) throw new Error('useQuiz must be used inside QuizProvider');
  return ctx;
};
