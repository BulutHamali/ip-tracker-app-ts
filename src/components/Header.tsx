import SearchBar from './SearchBar';

const Header = ({ onSearch }: { onSearch: (query: string) => void }) => {
  return (
    <header className="header">
      <h1>IP Address Tracker</h1>
      <SearchBar onSearch={onSearch} />
    </header>
  );
};

export default Header;

