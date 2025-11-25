import React from "react";
import { useParams, Link } from "react-router-dom";
import "./style.css";

const BookDetails = ({ books }) => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return (
      <div className="not-found">
        <h2>Book not found</h2>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="book-details">
      {/* Header */}
      <div className="first-home">
        <img src="/image/logo.png" alt="logo" height={80} />
        <h1 className="home-h1">THE LENDING LIBRARY</h1>
        <nav className="navbar">
          <Link to="/">HOME</Link>
          <Link to="/books">BOOKS</Link>
          <Link to="/enquiry">ENQUIRY</Link>
        </nav>
      </div>

      {/* Book Info */}
      <div className="book-card">
        <img src={book.img} alt={book.title} />
        <div className="book-info">
          <h2>{book.title}</h2>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Description:</strong> {book.description}</p>

          {/* Open Google Book Link */}
          <a href={book.link} target="_blank" rel="noopener noreferrer" className="btn">
            📖 Read Book
          </a>

          <br /><br />
          <Link to="/books" className="btn">Back to All Books</Link>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
