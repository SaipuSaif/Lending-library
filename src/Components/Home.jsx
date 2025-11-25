import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home = ({ books }) => {
  return (
    <div className='home'>
      {/* Header Section */}
      <div className='first-home'>
        <img src="/image/logo.png" alt="logo" height={100} />
        <h1 className='home-h1'>THE LENDING LIBRARY</h1>
        <nav className='navbar'>
          <Link to="/">HOME</Link>
          <Link to="/books">BOOKS</Link>
          <Link to="/enquiry">ENQUIRY</Link>
        </nav>
      </div>

      {/* Reader's Favourite Section */}
      <div className='second-home'>
        <h1>READER'S FAVOURITE</h1>
        <div className='containers'>
          {books.slice(0, 4).map((book) => (
            <div className='box' key={book.id}>
              <Link to={`/books/${book.id}`}>
                <img src={book.img} alt={book.title} />
                <br />
                <span>{book.title}</span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div className='third-home'>
        <div className='video-container'>
          <video
            autoPlay
            loop
            muted
            playsInline
            className="background-video"
          >

            <source
              src="https://www.pexels.com/download/video/3626002/"
              type="video/mp4"
            />

          </video>

          <div className='video-overlay'>
            <h2>Unlock the World of Knowledge</h2>
            <p>Read. Learn. Grow with The Lending Library.</p>
            <Link to="/books" className="btn">Explore Books</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
