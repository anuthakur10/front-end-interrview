import { Search } from 'lucide-react';
import { SearchBarProps } from '../types';
import { Input } from './ui/input';

export function SearchBar({ searchQuery, onSearchChange }: SearchBarProps) {
  return (
    <div className="relative mb-6">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
      <Input
        type="text"
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search questions..."
        className="pl-10"
      />
    </div>
  );
}