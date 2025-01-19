import { useMemo } from 'react';
import { Question } from '../types';
import { getAllQuestions } from '../utils/questionUtils';

export function useQuestions(category: string, searchQuery: string): Question[] {
  return useMemo(() => {
    let questions = getAllQuestions();

    if (category !== 'All') {
      questions = questions.filter(q => q.category === category);
    }

    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      questions = questions.filter(q => 
        q.title.toLowerCase().includes(query) || 
        q.answer.toLowerCase().includes(query)
      );
    }

    return questions;
  }, [category, searchQuery]);
}