import React, { useState } from "react";
import Card from "./Card";
import axios from "axios";

const Main = () => {
  const [search, setSearch] = useState("");
  const [bookData, setBookData] = useState([]);

  const searchBook = (evt) => {
    if (evt.key === "Enter") {
      axios
        .get(
          `https://www.googleapis.com/books/v1/users/1112223334445556677/bookshelves/3?q=${search}&key=YOUR_API_KEY&maxResults=40`
        )
        .then((res) => {
          setBookData(res.data.items);
        })
        .catch((err) => {
          console.log(err);
          setBookData([]);
        });
    }
  };

  return (
    <>
      <div className="header">
        <div className="row1">
          <h1>
            Sometimes books are the best friends. It doesn't judge you, it just teaches you...
          </h1>
        </div>
        <div className="row2">
          <h2>Find Your Book</h2>
          <div className="search">
            <input
              type="text"
              placeholder="Enter Your Book Name"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              onKeyDown={searchBook}
            />
            <button>
              <i className="fas fa-search"></i>
            </button>
          </div>
          <img src="./images/image1.png" alt="library" />
        </div>
      </div>

      <div className="container">
        {bookData.length > 0 ? (
          <Card book={bookData} />
        ) : (
          <p>No books found for your search.</p>
        )}
      </div>
    </>
  );
};

export default Main;
