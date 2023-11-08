import News from "./components/News";
import Header from "./components/Header";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import { API_KEY } from "./utils/constants.js";

import "./App.css";

function App() {
  const [stateNews, setStateNews] = useState();
  const { fetchUrl, setFetchUrl } = useContext(SearchContext);
  const { searching, setSearching } = useContext(SearchContext);

  useEffect(() => {
    async function getMovies() {
      const output = await fetch(
        `https://newsapi.org/v2/${fetchUrl}&apiKey=${API_KEY}`
      ).then((res) => res.json());
      await console.log(fetchUrl);
      return setStateNews(output.articles);
    }
    getMovies();
  }, [fetchUrl, setFetchUrl, searching, setSearching]);

  return (
    <main>
      <Header />
      <News newsToFilter={stateNews} />
    </main>
  );
}

export default App;
