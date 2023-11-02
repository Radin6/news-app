import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [searching, setSearching] = useState(false);

  return (
    <SearchContext.Provider value={{ searching, setSearching }}>
      {children}
    </SearchContext.Provider>
  );
}
