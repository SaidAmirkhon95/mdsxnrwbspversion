import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';

interface LanguageContextType {
  isDeutsch: boolean;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const storedLanguage = localStorage.getItem('selectedLanguage');
  const [isDeutsch, setIsDeutsch] = useState(storedLanguage === 'en' ? true : false);

  const toggleLanguage = () => {
    const newLanguage = isDeutsch ? 'de' : 'en';
    setIsDeutsch(!isDeutsch);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

  useEffect(() => {
    const storedLanguage = localStorage.getItem('selectedLanguage');
    if (storedLanguage === 'de' || storedLanguage === 'en') {
      setIsDeutsch(storedLanguage === 'en' ? true : false);
    }
  }, []);

  const contextValue: LanguageContextType = {
    isDeutsch,
    toggleLanguage,
  };

  return <LanguageContext.Provider value={contextValue}>{children}</LanguageContext.Provider>;
};
