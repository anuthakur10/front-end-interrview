import React from 'react';
import { QuestionCard } from './QuestionCard';
import { useQuestions } from '../hooks/useQuestions';

interface QuestionListProps {
  category: string;
  searchQuery: string;
}

export function QuestionList({ category, searchQuery }: QuestionListProps) {
  const questions = useQuestions(category, searchQuery);

  return (
    <div className="space-y-6 p-6">
      {questions.length === 0 ? (
        <div className="text-center text-muted-foreground">
          No questions found. Try adjusting your search or category.
        </div>
      ) : (
        questions.map((question) => (
          <QuestionCard key={question.id} question={question} />
        ))
      )}
    </div>
  );
}