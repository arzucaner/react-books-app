import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);

  const handleCardClick = (book) => {
    setShowModal(true);
    setSelectedBook(book);
  };

  return (
    <>
      {book.map((item) => {
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
