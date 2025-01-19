import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { SidebarProps } from '../types';
import { Button } from './ui/button';

export function Sidebar({ 
  categories, 
  selectedCategory, 
  onSelectCategory, 
  isOpen, 
  onToggle 
}: SidebarProps) {
  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={onToggle}
        className="fixed top-4 left-4 z-50 lg:hidden"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </Button>
      
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: isOpen ? 0 : -300 }}
        className={`fixed top-0 left-0 h-full w-64 bg-card shadow-lg z-40
          lg:relative lg:translate-x-0`}
      >
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6 text-card-foreground">Categories</h2>
          <nav className="space-y-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                className="w-full justify-start"
                onClick={() => onSelectCategory(category)}
              >
                {category}
              </Button>
            ))}
          </nav>
        </div>
      </motion.div>
    </>
  );
}