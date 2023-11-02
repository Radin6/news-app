import { useContext, useState } from "react";
import { SearchContext } from "../context/SearchContext";

export default function Header() {
  const { searching, setSearching } = useContext(SearchContext);

  const handleWritting = (event) => {
    if (event.target.value === "") {
      setSearching(false);
    } else {
      setSearching(event.target.value);
    }
  };
  return (
    <>
      <form>
        <input onChange={handleWritting} id="search-bar" />
        <button>Search</button>
      </form>
      <form>
        <input
          type="radio"
          id="everything"
          name="type-of-news"
          value="everything"
        />
        <label htmlFor="everything">See Random News</label>
        <input
          type="radio"
          id="top-headlines"
          name="type-of-news"
          value="top-headlines"
        />
        <label htmlFor="top-headlines">Top headlines</label>
      </form>

      <h2>
        {searching
          ? "The results are ..."
          : "The current top headlines are ..."}
      </h2>
    </>
  );
}
