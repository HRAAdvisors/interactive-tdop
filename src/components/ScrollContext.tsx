// ScrollContext.js
import { createContext, useState, useContext, ReactNode } from 'react';

const ScrollContext = createContext({});

export const useScrollContext = () => useContext(ScrollContext);

export const ScrollProvider = ({ children }: { children: ReactNode }) => {
  const [currentSection, setCurrentSection] = useState(0);

  return (
    <ScrollContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollContext.Provider>
  );
};
