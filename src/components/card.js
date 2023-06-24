import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [filter, setFilter] = useState("");

  const handleCardClick = (book) => {
    setShowModal(true);
    setSelectedBook(book);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const filteredBooks = book.filter((item) =>
    item.volumeInfo.title.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        value={filter}
        onChange={handleFilterChange}
        placeholder="Filter books"
      />

      {filteredBooks.map((item) => {
        const thumbnail = item.volumeInfo.imageLinks?.smallThumbnail;
        const amount = item.saleInfo.listPrice?.amount;
        const currency = item.saleInfo.listPrice?.currencyCode;
        const formattedAmount = amount
          ? new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency,
          }).format(amount)
          : null;

        if (thumbnail && amount) {
          return (
            <div
              className="card"
              key={item.id}
              onClick={() => handleCardClick(item)}
            >
              <img src={thumbnail} alt="" />
              <div className="bottom">
                <h3 className="title">{item.volumeInfo.title}</h3>
                <p className="amount">{formattedAmount}</p>
              </div>
            </div>
          );
        } else {
          return null;
        }
      })}
      {showModal && (
        <Modal
          show={showModal}
          item={selectedBook}
          onClose={() => setShowModal(false)}
        />
      )}
    </>
  );
};

export default Card;
