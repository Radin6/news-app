import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Header() {
  const country = "us";
  const API_KEY = "8811c0d61a9942f4bbfa4487b40b9be1";
  const { searching, setSearching } = useContext(SearchContext);
  const { fetchUrl, setFetchUrl } = useContext(SearchContext);

  const handleWritting = (event) => {
    if (event.target.value === "") {
      setSearching(false);
    } else {
      setSearching(event.target.value);
    }
  };

  const onChangeValue = (e) => {
    const searchType = e.target.value;
    setFetchUrl(
      `https://newsapi.org/v2/${searchType}?country=${country}&apiKey=${API_KEY}`
    );
  };

  return (
    <>
      <form>
        <input onChange={handleWritting} id="search-bar" />
        <button>Search</button>
      </form>
      <form onChange={onChangeValue}>
        <input
          type="radio"
          name="type-of-news"
          value="everything"
          defaultChecked
        />
        See Random News
        <input type="radio" name="type-of-news" value="top-headlines" />
        Top headlines
      </form>

      <h2>
        {searching
          ? "The results are ..."
          : "The current top headlines are ..."}
      </h2>
    </>
  );
}
