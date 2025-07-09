import { useState, useEffect } from 'react';
import { fetchIPDetails } from '../utils/api';

type IPData = {
  ip: any;
  location: {
    continent: any;
    city: any;
    region: any;
    country: any;
    postal: any;
    timezone: any;
    lat: any;
    lng: any;
    asn: any;
    domain: any;
  };
  isp: any;
};

export const useFetchIP = (query: string) => {
  const [ipData, setIPData] = useState<IPData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetch = async () => {
      try {
        setLoading(true);
        const data = await fetchIPDetails(query);
        setIPData(data);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setLoading(false);
      }
    };

    fetch();
  }, [query]);

  return { ipData, loading, error };
};
