import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
import "./Header.css";

import {
  CODES_COUNTRIES,
  CATEGORIES,
  CODES_LANGUAGES,
  SORT_BY,
} from "../utils/constants.js";

export default function Header({ totalArticles }) {
  const { searching, setSearching } = useContext(SearchContext);
  const { setFetchUrl } = useContext(SearchContext);

  const updateFetchUrl = (newSearching) => {
    console.log(newSearching);
    if (newSearching.type === "top-headlines") {
      return setFetchUrl(
        `${newSearching.type}?q=${newSearching.q}&country=${newSearching.country}&category=${newSearching.category}&lang=${newSearching.lang}`,
      );
    } else if (newSearching.type === "search") {
      return setFetchUrl(
        `${newSearching.type}?q=${newSearching.q}&lang=${newSearching.lang}&sortby=${newSearching.sortby}&country=${newSearching.country}`,
      );
    }
  };

  const onChangeFilter = async (f) => {
    const filterValue = f.target.value;
    const filterId = f.target.id;
    const prevSearching = searching;

    if (filterId === "search" || filterId === "top-headlines") {
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

  const Filters = () => {
    return (
      <fieldset onChange={onChangeFilter}>
        <legend>Filters</legend>

        <label htmlFor="lang">
          Language
          <select name="lang" id="lang" defaultValue={searching.lang}>
            {CODES_LANGUAGES.map((langu) => (
              <option key={langu.code} value={langu.code}>
                {langu.lang}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="country">
          Country
          <select name="country" id="country" defaultValue={searching.country}>
            {CODES_COUNTRIES.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="sortby">
          Sort By
          <select name="sortby" id="sortby" defaultValue={searching.sortby}>
            {SORT_BY.map((sortby) => (
              <option key={sortby} value={sortby}>
                {sortby}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="category">
          Category
          <select
            name="category"
            id="category"
            defaultValue={searching.category}
          >
            {CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </label>
      </fieldset>
    );
  };

  return (
    <div className="container-forms">
      <fieldset>
        <legend>Write your Search</legend>
        <input
          id="q"
          onChange={onChangeFilter}
          placeholder="Weather..."
          name="Search"
        />
      </fieldset>

      <fieldset>
        <legend>Type of Search</legend>
        <form onChange={onChangeFilter}>
          <input
            type="radio"
            name="type-of-news"
            id="top-headlines"
            value="top-headlines"
            defaultChecked
          />
          Top headlines
          <input type="radio" name="type-of-news" id="search" value="search" />
          Search News
        </form>
      </fieldset>

      <Filters />

      <h2>The news are</h2>
    </div>
  );
}
