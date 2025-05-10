import { useEffect, useState } from 'react';
import { fetchQuestions }      from '../api/Api';
import type { Question }       from '../types/types';

export const useFetchQuestions = (category: string) => {
  const [data,    setData]    = useState<Question[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error,   setError]   = useState<string | null>(null);

  useEffect(() => {
    setLoading(true);
    fetchQuestions(category)
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [category]);

  return { data, loading, error };
};
