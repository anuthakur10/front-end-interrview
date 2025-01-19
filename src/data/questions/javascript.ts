import { Question } from '../../types';

export const javascriptQuestions: Question[] = [
  {
    id: 'js-1',
    category: 'JavaScript',
    title: 'Explain closures in JavaScript.',
    answer: 'A closure is a function that has access to variables in its outer (enclosing) lexical scope, even after the outer function has returned. Closures are commonly used for data privacy and maintaining state.',
    codeExample: `function counter() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
}

const myCounter = counter();
console.log(myCounter.increment()); // 1
console.log(myCounter.increment()); // 2`
  },
  {
    id: 'js-2',
    category: 'JavaScript',
    title: 'What is the difference between let, const, and var?',
    answer: 'var is function-scoped and hoisted, while let and const are block-scoped. const prevents reassignment of the variable (but not mutation of objects). let allows reassignment. Best practice is to use const by default, and let when reassignment is needed.',
    codeExample: `// var is function-scoped
var x = 1;
if (true) {
  var x = 2; // same variable
}
console.log(x); // 2

// let is block-scoped
let y = 1;
if (true) {
  let y = 2; // different variable
}
console.log(y); // 1`
  },
  {
    id: 'js-3',
    category: 'JavaScript',
    title: 'Explain Promise and async/await.',
    answer: 'Promises are objects representing eventual completion of an asynchronous operation. async/await is syntactic sugar over Promises, making asynchronous code look synchronous. async functions always return Promises, and await pauses execution until the Promise resolves.',
    codeExample: `// Promise
fetch('/api/data')
  .then(response => response.json())
  .catch(error => console.error(error));

// async/await
async function getData() {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}`
  }
];