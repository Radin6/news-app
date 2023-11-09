import { createContext } from "react";
import { useState } from "react";

export const SearchContext = createContext();

export function SearchProvider({ children }) {
  const [fetchUrl, setFetchUrl] = useState("top-headlines?");
  const [searching, setSearching] = useState({
    type: "top-headlines",
    q: "",
    lang: "",
    country: "",
    sortby: "",
    category: "",
  });

  return (
    <SearchContext.Provider
      value={{ searching, setSearching, fetchUrl, setFetchUrl }}
    >
      {children}
    </SearchContext.Provider>
  );
}
