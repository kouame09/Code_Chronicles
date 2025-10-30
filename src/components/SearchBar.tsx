import { Search, X } from 'lucide-react';

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="search-container">
      <Search className="search-icon" />
      <input
        type="text"
        placeholder="Search posts..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="search-input"
      />
      {value && (
        <button
          onClick={() => onChange('')}
          className="search-clear"
          aria-label="Clear search"
        >
          <X className="clear-icon" />
        </button>
      )}
    </div>
  );
}
