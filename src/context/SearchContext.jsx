import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [fetchUrl, setFetchUrl] = useState("");
  const [searching, setSearching] = useState(false);

  return (
    <SearchContext.Provider
      value={{ searching, setSearching, fetchUrl, setFetchUrl }}
    >
      {children}
    </SearchContext.Provider>
  );
}
