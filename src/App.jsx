import News from "./components/News";
import Header from "./components/Header";
import { useEffect, useState, useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import { API_KEY } from "./utils/constants.js";

import "./App.css";

function App() {
  const [stateNews, setStateNews] = useState();
  const { fetchUrl } = useContext(SearchContext);

  useEffect(() => {
    async function getNews() {
      const output = await fetch(
        `https://gnews.io/api/v4/${fetchUrl}&apikey=${API_KEY}`,
      ).then((res) => res.json());
      await console.log(fetchUrl);
      return setStateNews(output.articles);
    }
    getNews();
  }, [fetchUrl]);

  return (
    <main>
      <Header />
      <News newsToFilter={stateNews} />
    </main>
  );
}

export default App;
