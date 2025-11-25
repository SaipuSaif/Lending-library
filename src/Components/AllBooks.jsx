import React, { useState } from "react";
import { Link } from "react-router-dom";

const AllBooks = ({ books }) => {
  const [search, setSearch] = useState("");

  // Filter books by title or author
  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(search.toLowerCase()) ||
      book.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="all-books">
      <h1 style={{ textAlign: "center" }}>Books Shelves</h1>

      {/* Search Box */}
      <div className="search-box">
        <input
          type="text"
          placeholder="Search by title or author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Books List */}
      <div className="book-list">
        {filteredBooks.length > 0 ? (
          filteredBooks.map((book) => (
            <div className="book-card" key={book.id}>
              <Link to={`/books/${book.id}`}>
                <img src={book.img} alt={book.title} />
                <p>{book.title}</p>
                <small>by {book.author}</small>
              </Link>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center", gridColumn: "1 / -1" }}>
            No books found.
          </p>
        )}
      </div>

      {/* Footer */}
      <div className="footer-book">
        <Link to="/" className="btn">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default AllBooks;
