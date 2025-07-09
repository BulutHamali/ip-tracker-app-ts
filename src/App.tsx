import './App.css';
import Header from './components/Header';
import IPInfoCard from './components/IPInfoCard';
import MapView from './components/MapView';
import { useState } from 'react';
import { useFetchIP } from './hooks/useFetchIP';

function App() {
  const [query, setQuery] = useState('');
  const { ipData, loading, error } = useFetchIP(query);

  const handleSearch = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className="App">
      <Header onSearch={handleSearch} />

      {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
      {error && <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>}

      {ipData && (
        <>
          <MapView position={[ipData.location.lat, ipData.location.lng]} />
          <IPInfoCard data={ipData} />
        </>
      )}
    </div>
  );
}

export default App;
