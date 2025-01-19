import { Question } from '../../types';

export const reactQuestions: Question[] = [
  {
    id: 'react-1',
    category: 'ReactJS',
    title: 'What are React Hooks and their benefits?',
    answer: 'Hooks are functions that allow using state and lifecycle features in functional components. Benefits include: reusing stateful logic between components, splitting complex components into smaller functions, and avoiding class components complexity. Common hooks: useState, useEffect, useContext, useRef.',
    codeExample: `function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    document.title = \`Count: \${count}\`;
  }, [count]);

  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  },
  {
    id: 'react-2',
    category: 'ReactJS',
    title: 'Explain React Virtual DOM and its benefits.',
    answer: 'Virtual DOM is a lightweight copy of the actual DOM. React uses it to optimize rendering by: 1) Creating a virtual representation of UI, 2) When state changes, creating a new virtual DOM, 3) Comparing it with previous version (diffing), 4) Only updating actual DOM where necessary. This process is called reconciliation.',
  },
  {
    id: 'react-3',
    category: 'ReactJS',
    title: 'What are React props and state?',
    answer: 'Props are read-only data passed from parent to child components. State is mutable data managed within a component. Props are used for component communication, while state is for handling component-specific data that can change over time.',
    codeExample: `// Props example
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

// State example
function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`
  }
];