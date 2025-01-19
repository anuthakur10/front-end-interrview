export * from './questions/html';
export * from './questions/css';
export * from './questions/javascript';
export * from './questions/react';
export * from './questions/nodejs';

// Re-export all question arrays
import { htmlQuestions } from './questions/html';
import { cssQuestions } from './questions/css';
import { javascriptQuestions } from './questions/javascript';
import { reactQuestions } from './questions/react';
import { nodejsQuestions } from './questions/nodejs';

export {
  htmlQuestions,
  cssQuestions,
  javascriptQuestions,
  reactQuestions,
  nodejsQuestions
};