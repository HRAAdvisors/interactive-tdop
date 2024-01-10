import { ReactNode, createContext, useState } from 'react';

export const ScrollableTitleContext = createContext<{
  refs: any[];
  addScrollableTitleRef?: (ref: any) => void;
}>({ refs: [] });

export const ScrollableTitleProvider = ({ children }: { children: ReactNode }) => {
  const [refs, setRefs] = useState([]);

  const addScrollableTitleRef = (newRef: any) => {
    // Function to add a new ref if it's not already included
    setRefs((prevRefs: any) => {
      // Check if the ref is already included to prevent infinite updates
      return prevRefs.includes(newRef) ? prevRefs : [...prevRefs, newRef];
    });
  };

  return (
    <ScrollableTitleContext.Provider value={{ refs, addScrollableTitleRef }}>
      {children}
    </ScrollableTitleContext.Provider>
  );
};
