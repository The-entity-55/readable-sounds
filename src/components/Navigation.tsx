import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Search, BookOpen, Bookmark } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="p-4 border-b" role="navigation">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        <div className="flex items-center space-x-4">
          <img 
            src="/sonic-vision-logo.png" 
            alt="Sonic Vision Logo" 
            className="h-8 w-8"
          />
          <h1 className="text-xl font-bold text-secondary">Sonic Vision</h1>
        </div>

        <div className="flex-1 max-w-lg mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search in document..."
              className="pl-10 w-full"
              aria-label="Search in document"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="flex items-center space-x-2">
            <Bookmark className="h-4 w-4" />
            <span>Bookmarks</span>
          </Button>
          <Button size="sm">Upload New</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;