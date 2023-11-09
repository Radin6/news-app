import "./News.css";

export default function News({ newsToFilter }) {
  return (
    <div className="news">
      {!newsToFilter ? (
        <h2>Please, write your search</h2>
      ) : (
        newsToFilter.map((arti) => (
          <li className="one-news" key={arti.url}>
            <h3>{arti.title}</h3>
            {arti.image ? (
              <img src={arti.image} alt={arti.title} />
            ) : (
              <img src="/breaking-news-generic.jpg" alt={arti.title} />
            )}
            <p>{arti.description}</p>
          </li>
        ))
      )}
    </div>
  );
}

//https://newsapi.org/v2/top-headlines?country=us&apiKey=8811c0d61a9942f4bbfa4487b40b9be1
