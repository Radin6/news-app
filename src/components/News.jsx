import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

import "./News.css";

export default function News({ newsToFilter }) {
  const { searching, setSearching } = useContext(SearchContext);

  const filterNews = (news) => {
    return news.filter((oneNews) => {
      if (searching != "") {
        return oneNews.title.toLowerCase().includes(searching);
      } else {
        return oneNews;
      }
    });
  };

  return (
    <div className="news">
      {!newsToFilter ? (
        <h2>Loading...</h2>
      ) : (
        filterNews(newsToFilter).map((arti) => (
          <li className="one-news" key={arti.url}>
            <h3>{arti.title}</h3>
            <img src={arti.urlToImage} alt={arti.title} />
            <p>{arti.description}</p>
          </li>
        ))
      )}
    </div>
  );
}

//https://newsapi.org/v2/top-headlines?country=us&apiKey=8811c0d61a9942f4bbfa4487b40b9be1
