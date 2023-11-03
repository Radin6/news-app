import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [fetchUrl, setFetchUrl] = useState(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=8811c0d61a9942f4bbfa4487b40b9be1"
  );
  const [searching, setSearching] = useState(false);

  return (
    <SearchContext.Provider
      value={{ searching, setSearching, fetchUrl, setFetchUrl }}
    >
      {children}
    </SearchContext.Provider>
  );
}
