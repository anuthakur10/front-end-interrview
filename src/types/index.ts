export interface Question {
  id: string;
  category: string;
  title: string;
  answer: string;
  codeExample?: string;
}

export interface SidebarProps {
  categories: string[];
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

export interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export interface QuestionCardProps {
  question: Question;
}