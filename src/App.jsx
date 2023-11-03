import News from "./components/News";
import Header from "./components/Header";
import exampleNews from "./mocks/example-news.json";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "./context/SearchContext";

import "./App.css";

function App() {
  const [stateNews, setStateNews] = useState();
  const { fetchUrl, setFetchUrl } = useContext(SearchContext);

  useEffect(() => {
    async function getMovies() {
      const output = await fetch(fetchUrl).then((res) => res.json());

      return setStateNews(output.articles);
    }
    getMovies();
  }, [fetchUrl]);

  return (
    <main>
      <Header />
      <News newsToFilter={stateNews} />
    </main>
  );
}

export default App;
