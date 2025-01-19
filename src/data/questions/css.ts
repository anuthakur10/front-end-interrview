import { Question } from '../../types';

export const cssQuestions: Question[] = [
  {
    id: 'css-1',
    category: 'CSS3',
    title: 'What is the Box Model in CSS?',
    answer: 'The CSS Box Model is a fundamental concept that describes how elements are structured. It consists of: content (the actual content), padding (space around content), border (line around padding), and margin (space outside border). The total width/height of an element is the sum of all these components.',
    codeExample: `.box {
  width: 100px;
  padding: 10px;
  border: 1px solid black;
  margin: 15px;
}`
  },
  {
    id: 'css-2',
    category: 'CSS3',
    title: 'Explain Flexbox and its main properties.',
    answer: 'Flexbox is a one-dimensional layout model for arranging items in rows or columns. Main properties include: display: flex (container), flex-direction, justify-content (main axis alignment), align-items (cross axis alignment), and flex properties on children (flex-grow, flex-shrink, flex-basis).',
    codeExample: `.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.item {
  flex: 1;
}`
  },
  {
    id: 'css-3',
    category: 'CSS3',
    title: 'What are CSS Grid and its benefits?',
    answer: 'CSS Grid is a two-dimensional layout system for creating complex grid-based layouts. Benefits include: ability to create both rows and columns simultaneously, better control over layout, simplified responsive design, and reduced need for media queries.',
    codeExample: `.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}`
  }
];