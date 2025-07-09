// Fetch IP details for a given IP or domain
export const fetchIPDetails = async (query: string = '') => {
  let ipToLookup = '';

  if (query.trim() === '') {
    ipToLookup = '';
  } else if (/^\d{1,3}(\.\d{1,3}){3}$/.test(query)) {
    ipToLookup = query.trim();
  } else {
    const dnsRes = await fetch(`https://dns.google/resolve?name=${query.trim()}&type=A`);
    const dnsData = await dnsRes.json();

    if (!dnsData.Answer?.length) {
      throw new Error('Could not resolve domain to IP. Please check the domain.');
    }

    ipToLookup = dnsData.Answer[0].data;
  }

  const response = await fetch(`https://ipwho.is/${ipToLookup}`);
  const data = await response.json();

  if (!data.success) {
    throw new Error(data.message || 'Unable to locate this IP or domain.');
  }

  return {
    ip: data.ip,
    location: {
      continent: data.continent,
      city: data.city,
      region: data.region,
      country: data.country,
      postal: data.postal || '',
      timezone: data.timezone_gmt,
      lat: data.latitude,
      lng: data.longitude,
      asn: data.connection?.asn?.toString() || '',
      domain: data.connection?.domain || '',
    },
    isp: data.connection?.org || data.connection?.isp || 'N/A',
  };
};

// Fetch the user's current IP using IPify + your API key
export const fetchCurrentIP = async (): Promise<string> => {
  const API_KEY = import.meta.env.VITE_IPIFY_API_KEY;

  const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${API_KEY}`);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.messages || 'Failed to fetch IP');
  }

  return data.ip;
};
