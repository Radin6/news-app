import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";

export function GetUrl() {
  // input: object with actual filter (searching)
  const { searching } = useContext(SearchContext);
  const { setFetchUrl } = useContext(SearchContext);

  // output: setFetchUrl()
  if (searching.type === "top-headlines") {
    console.log(
      `${searching.type}?country=${searching.country}&category=${searching.category}`,
    );

    return setFetchUrl(
      `${searching.type}?country=${searching.country}&category=${searching.category}`,
    );
  } else if (searching.type === "everything") {
    console.log(
      `${searching.type}?laguage=${searching.language}&sort=${searching.sort}`,
    );
    return setFetchUrl(
      `${searching.type}?laguage=${searching.language}&sort=${searching.sort}`,
    );
  }
}
