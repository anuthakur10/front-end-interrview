import { Question } from '../../types';

export const nodejsQuestions: Question[] = [
  {
    id: 'node-1',
    category: 'NodeJS',
    title: 'What is Node.js Event Loop?',
    answer: 'The Event Loop is what allows Node.js to perform non-blocking I/O operations despite JavaScript being single-threaded. It handles executing callbacks, network I/O, and disk I/O in different phases. Main phases: timers, pending callbacks, idle/prepare, poll, check, and close callbacks.',
  },
  {
    id: 'node-2',
    category: 'NodeJS',
    title: 'Explain middleware in Express.js.',
    answer: 'Middleware functions are functions that have access to the request object (req), response object (res), and the next middleware function. They can execute code, modify req/res objects, end the request-response cycle, and call the next middleware.',
    codeExample: `app.use((req, res, next) => {
  console.log('Time:', Date.now());
  next();
});

app.use('/user/:id', (req, res, next) => {
  console.log('Request Type:', req.method);
  next();
});`
  },
  {
    id: 'node-3',
    category: 'NodeJS',
    title: 'What is the purpose of package.json?',
    answer: 'package.json is a project manifest file that contains metadata about the project and its dependencies. It includes: project name, version, dependencies, dev dependencies, scripts for running tasks, and other configuration settings.',
    codeExample: `{
  "name": "my-app",
  "version": "1.0.0",
  "dependencies": {
    "express": "^4.17.1"
  },
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js"
  }
}`
  }
];