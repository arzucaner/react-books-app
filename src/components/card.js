import React, { useState } from "react";
import Modal from "./Modal";

const Card = ({ book }) => {
  const [show, setShow] = useState(false);
  const [bookItem, setItem] = useState();

  return (
    <>
      {book.map((item) => {
        const thumbnail =
          item.volumeInfo.imageLinks &&
          item.volumeInfo.imageLinks.smallThumbnail;
        const amount =
          item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
        const currency =
          item.saleInfo.listPrice && item.saleInfo.listPrice.currencyCode;
        const formattedAmount =
          amount && new Intl.NumberFormat("en-GB", { style: "currency", currency }).format(amount);
        if (thumbnail && amount) {
          return (
            <div className="card" key={item.id} onClick={() => { setShow(true); setItem(item) }}>
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
      <Modal show={show} item={bookItem} onClose={() => setShow(false)} />
    </>
  );
};

export default Card;
