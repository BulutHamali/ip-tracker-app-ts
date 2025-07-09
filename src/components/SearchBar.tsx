import { useState } from 'react';

interface Props {
  onSearch: (query: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search IP address or domain"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit">→</button>
    </form>
  );
};

export default SearchBar;
