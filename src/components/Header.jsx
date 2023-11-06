import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import {
  COUNTRIES,
  CATEGORIES,
  LANGUAGES,
  SORT_BY,
  API_KEY,
} from "../utils/constants.js";

export default function Header() {
  //Make them configurable
  const country = "us";
  const query = "Apple";
  const date = "2023-11-03";
  const sortBy = "popularity";

  const { searching, setSearching } = useContext(SearchContext);
  const { fetchUrl, setFetchUrl } = useContext(SearchContext);

  const handleWritting = (event) => {
    if (event.target.value === "") {
      setSearching(false);
    } else {
      setSearching(event.target.value);
    }
  };

  const onChangeType = (t) => {
    const searchType = t.target.value;
    if (searchType === "everything") {
      setFetchUrl(
        `https://newsapi.org/v2/${searchType}?q=${query}&from=${date}&sortBy=${sortBy}&apiKey=${API_KEY}`
      );
    } else {
      setFetchUrl(
        `https://newsapi.org/v2/${searchType}?q=${query}?country=${country}&apiKey=${API_KEY}`
      );
    }
  };

  const onChangeFilter = (f) => {
    const searchFilter = f.target.value;
  };

  const TopHeadline = () => {
    return (
      <fieldset onChange={onChangeFilter}>
        <legend>Top Headlines Filters</legend>

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          {COUNTRIES.map((country) => (
            <option key={country} value={country}>
              {country}
            </option>
          ))}
        </select>

        <label htmlFor="categ">Category</label>
        <select name="categ" id="categ">
          {CATEGORIES.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </fieldset>
    );
  };

  const Everything = () => {
    return (
      <fieldset onChange={onChangeFilter}>
        <legend>All News</legend>
        <label htmlFor="lang">Language</label>
        <select name="lang" id="lang">
          {LANGUAGES.map((lang) => (
            <option key={lang} value={lang}>
              {lang}
            </option>
          ))}
        </select>
        <label htmlFor="sort">Sort By</label>
        <select name="sort" id="sort">
          {SORT_BY.map((sort) => (
            <option key={sort} value={sort}>
              {sort}
            </option>
          ))}
        </select>
      </fieldset>
    );
  };

  return (
    <>
      <form>
        <input onChange={handleWritting} id="search-bar" />
        <button>Search</button>
      </form>

      <form onChange={onChangeType}>
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
      {fetchUrl.includes("top-headlines") ? <TopHeadline /> : <Everything />}
      <h2>
        {searching
          ? "The results are ..."
          : "The current top headlines are ..."}
      </h2>
    </>
  );
}
