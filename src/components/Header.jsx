import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

import {
  CODES_COUNTRIES,
  CATEGORIES,
  CODES_LANGUAGES,
  SORT_BY,
} from "../utils/constants.js";

export default function Header() {
  const { searching, setSearching } = useContext(SearchContext);
  const { setFetchUrl } = useContext(SearchContext);

  const updateFetchUrl = (newSearching) => {
    console.log(newSearching);
    if (newSearching.type === "top-headlines") {
      return setFetchUrl(
        `${newSearching.type}?q=${newSearching.q}&country=${
          newSearching.country ? newSearching.country : ""
        }&category=${newSearching.category ? newSearching.category : ""}`,
      );
    } else if (newSearching.type === "everything") {
      return setFetchUrl(
        `${newSearching.type}?q=${newSearching.q}&laguage=${newSearching.language}&sort=${newSearching.sort}`,
      );
    }
  };

  const onChangeFilter = async (f) => {
    const filterValue = f.target.value;
    const filterId = f.target.id;
    const prevSearching = searching;

    if (filterId === "everything" || filterId === "top-headlines") {
      const newSearching = { ...prevSearching, type: filterId };

      await setSearching(newSearching);
      await console.log(newSearching);
      return updateFetchUrl(newSearching);
    } else {
      const newSearching = { ...prevSearching, [filterId]: filterValue };

      await setSearching(newSearching);
      await console.log(newSearching);
      return updateFetchUrl(newSearching);
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

        <label htmlFor="category">Category</label>
        <select name="category" id="category">
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
        <label htmlFor="language">Language</label>
        <select name="language" id="language">
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
        <input id="q" onChange={onChangeFilter} />
        <button>Search</button>
      </form>

      <form onChange={onChangeFilter}>
        <input
          type="radio"
          name="type-of-news"
          id="top-headlines"
          value="top-headlines"
          defaultChecked
        />
        Top headlines
        <input
          type="radio"
          name="type-of-news"
          id="everything"
          value="everything"
        />
        Everything
      </form>
      {searching.type === "top-headlines" ? <TopHeadline /> : <Everything />}

      <h2>The news are</h2>
    </>
  );
}
