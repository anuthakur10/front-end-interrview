import { Question } from '../types';
import { 
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
  reactQuestions,
  nodejsQuestions
} from '../data/questions';

export function getAllQuestions(): Question[] {
  return [
    ...htmlQuestions,
    ...cssQuestions,
    ...javascriptQuestions,
    ...reactQuestions,
    ...nodejsQuestions
  ];
}