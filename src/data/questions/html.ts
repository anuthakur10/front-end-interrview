import { Question } from '../../types';

export const htmlQuestions: Question[] = [
  {
    id: 'html-1',
    category: 'HTML5',
    title: 'What are the new features in HTML5?',
    answer: 'HTML5 introduced several new features including: semantic elements (<header>, <footer>, <nav>, <section>), form input types (email, date, number), <canvas> for graphics, <audio> and <video> for media playback, local storage, and WebSockets for real-time communication.',
  },
  {
    id: 'html-2',
    category: 'HTML5',
    title: 'What is the difference between localStorage and sessionStorage?',
    answer: 'localStorage persists data without expiration, while sessionStorage only persists data for the duration of the browser session. localStorage data remains even after the browser is closed, while sessionStorage data is cleared when the session ends.',
    codeExample: `// localStorage
localStorage.setItem('key', 'value');
const value = localStorage.getItem('key');

// sessionStorage
sessionStorage.setItem('key', 'value');
const tempValue = sessionStorage.getItem('key');`
  },
  {
    id: 'html-3',
    category: 'HTML5',
    title: 'Explain the importance of DOCTYPE declaration.',
    answer: 'DOCTYPE declaration tells the browser which version of HTML the page is using. It must be the first line in an HTML document. For HTML5, the declaration is simply <!DOCTYPE html>. Without it, browsers may enter quirks mode, leading to inconsistent rendering.',
  }
];