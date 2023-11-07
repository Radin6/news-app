import { useContext, useState, useEffect } from "react";
import { SearchContext } from "../context/SearchContext";
import {
  CODES_COUNTRIES,
  CATEGORIES,
  CODES_LANGUAGES,
  SORT_BY,
} from "../utils/constants.js";

export default function Header() {
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
      // Everything search: language, date, sortBy
      {
        searching
          ? setFetchUrl(`${searchType}?q=${searching}`)
          : setFetchUrl(`${searchType}?q=a`);
      }
    } else {
      // Top headlines search: country, category
      {
        searching
          ? setFetchUrl(`${searchType}?q=${searching}`)
          : setFetchUrl(`${searchType}?country=us`);
      }
    }
  };

  const onChangeFilter = (f) => {
    const filterValue = f.target.value;
    const filterId = f.target.id;
    const prevFetchUrl = fetchUrl;

    {
      ["country", "category", "language", "sortBy"].includes(filterId)
        ? setFetchUrl(
            prevFetchUrl.replace(
              `${filterId}=/[a-z]+/`,
              `${filterId}=${filterValue}`
            )
          )
        : setFetchUrl(`${prevFetchUrl}&${filterId}=${filterValue}`);
    }
  };

  const TopHeadline = () => {
    return (
      <fieldset onChange={onChangeFilter}>
        <legend>Top Headlines Filters</legend>

        <label htmlFor="country">Country</label>
        <select name="country" id="country">
          {CODES_COUNTRIES.map((country) => (
            <option key={country.code} value={country.code}>
              {country.name}
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
          {CODES_LANGUAGES.map((lang) => (
            <option key={lang.code} value={lang.code}>
              {lang.lang}
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
        <input type="radio" name="type-of-news" value="top-headlines" />
        Top headlines
        <input type="radio" name="type-of-news" value="everything" />
        Everything
      </form>
      {fetchUrl.includes("top-headlines") ? (
        searching ? (
          <TopHeadline />
        ) : null
      ) : searching ? (
        <Everything />
      ) : null}
      <h2>
        {searching
          ? "The results are ..."
          : "The current top headlines are ..."}
      </h2>
    </>
  );
}
