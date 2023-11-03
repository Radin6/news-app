import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Header() {
  //Make them configurable
  const country = "us";
  const query = "Apple";
  const date = "2023-11-03";
  const sortBy = "popularity";

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
    console.log(e.target.value);
    const searchType = e.target.value;
    if (searchType === "everything") {
      setFetchUrl(
        `https://newsapi.org/v2/${searchType}?q=${query}&from=${date}&sortBy=${sortBy}&apiKey=${API_KEY}`
      );
    } else {
      setFetchUrl(
        `https://newsapi.org/v2/${searchType}?country=${country}&apiKey=${API_KEY}`
      );
    }
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
          value="top-headlines"
          defaultChecked
        />
        Top headlines
        <input type="radio" name="type-of-news" value="everything" />
        Everything
      </form>

      <h2>
        {searching
          ? "The results are ..."
          : "The current top headlines are ..."}
      </h2>
    </>
  );
}
