import "./News.css";
import { useState } from "react";

export default function News({ newsToFilter }) {
  const [modalData, setModalData] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) {
      return null;
    } else {
      return (
        <article className="modal-container">
          <button className="close-modal" onClick={onClose}>
            Close
          </button>
          <h3>{modalData.title}</h3>
          <div className="modal-img-text">
            <img src={modalData.image} alt={modalData.title} />
            <p className="modal-text">{modalData.content}</p>
          </div>
          <i>
            Published at: {modalData.publishedAt} - Source:{" "}
            {modalData.source.name} - {modalData.source.url}
          </i>
        </article>
      );
    }
  };

  return (
    <>
      <div className="news">
        {!newsToFilter ? (
          <h2>Please, write your search</h2>
        ) : (
          newsToFilter.map((arti) => (
            <li
              className="one-news"
              key={arti.url}
              onClick={() => {
                setModalData(arti);
                setModalOpen(true);
              }}
            >
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
      <Modal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
        }}
      />
    </>
  );
}

//https://newsapi.org/v2/top-headlines?country=us&apiKey=8811c0d61a9942f4bbfa4487b40b9be1
