import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { QuestionCardProps } from '../types';

export function QuestionCard({ question }: QuestionCardProps) {
  return (
    <div className="bg-card rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4 text-card-foreground">{question.title}</h3>
      <p className="mb-4 text-muted-foreground">{question.answer}</p>
      {question.codeExample && (
        <SyntaxHighlighter 
          language="javascript" 
          style={tomorrow}
          className="rounded-md"
        >
          {question.codeExample}
        </SyntaxHighlighter>
      )}
    </div>
  );
}