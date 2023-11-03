import exampleNews from "../mocks/example-news.json";
import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

import "./News.css";

export default function News() {
  const { searching, setSearching } = useContext(SearchContext);
  const { fetchUrl, setFetchUrl } = useContext(SearchContext);
  const [stateNews, setStateNews] = useState(exampleNews.articles);

  const filterNews = (news) => {
    return news.filter((oneNews) => {
      if (searching != "") {
        return oneNews.title.toLowerCase().includes(searching);
      } else {
        return oneNews;
      }
    });
  };

  /*{useEffect(() => {
    const getMovies = () => {};
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((json) => {
        console.log(json.articles);
        //setStateNews(json.articles);
      });
  }, []);}*/

  return (
    <div className="news">
      {filterNews(stateNews).map((arti) => (
        <li className="one-news" key={arti.url}>
          <h3>{arti.title}</h3>
          <img src={arti.urlToImage} alt={arti.title} />
          <p>{arti.description}</p>
        </li>
      ))}
    </div>
  );
}

//https://newsapi.org/v2/top-headlines?country=us&apiKey=8811c0d61a9942f4bbfa4487b40b9be1
