import { getAllQuestions } from './questionUtils';

export function getAllCategories(): string[] {
  const questions = getAllQuestions();
  const categories = new Set(questions.map(q => q.category));
  return ['All', ...Array.from(categories)].sort();
}