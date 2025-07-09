import { createContext, useContext, useState, type ReactNode } from 'react';

interface IPContextType {
  ipData: IPDataType | null;
  setIPData: (data: IPDataType) => void;
}

const IPContext = createContext<IPContextType | undefined>(undefined);

export const useIP = () => {
  const context = useContext(IPContext);
  if (!context) {
    throw new Error('useIP must be used within an IPProvider');
  }
  return context;
};

interface IPProviderProps {
  children: ReactNode;
}

export interface IPDataType {
  ip: string;
  location: {
    continent: string;
    city: string;
    region: string;
    country: string;
    postal: string;
    timezone: string;
    lat: number;
    lng: number;
    asn: string;
    domain: string;
  };
  isp: string;
}

export const IPProvider = ({ children }: IPProviderProps) => {
  const [ipData, setIPData] = useState<IPDataType | null>(null);

  return (
    <IPContext.Provider value={{ ipData, setIPData }}>
      {children}
    </IPContext.Provider>
  );
};
