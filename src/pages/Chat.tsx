import { useState } from 'react';
import { Sidebar } from '@/components/Sidebar';
import { SearchBar } from '@/components/SearchBar';
import { QuestionList } from '@/components/QuestionList';
import { getAllCategories } from '@/utils/categoryUtils';

export default function Chat() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = getAllCategories();

  return (
    <div className="min-h-screen bg-background">
      <div className="flex">
        <Sidebar
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          isOpen={isOpen}
          onToggle={() => setIsOpen(!isOpen)}
        />
        
        <main className="flex-1 p-6 lg:pl-64">
          <SearchBar
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
          <QuestionList
            category={selectedCategory}
            searchQuery={searchQuery}
          />
        </main>
      </div>
    </div>
  );
}