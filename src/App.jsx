import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components/Home.jsx";

import AllBooks from "./Components/AllBooks.jsx";
import booksData from "./books.json"; // 👈 import JSON directly
import BookDetails from "./Components/Bookdetails.jsx";
import Enquiry from "./Components/Enquiry.jsx";

function App() {
  const [books, setBooks] = useState(booksData);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home books={books} />} />
        <Route path="/books" element={<AllBooks books={books} />} />
        <Route path="/books/:id" element={<BookDetails books={books} />} />
        <Route path="/enquiry" element={<Enquiry />} />

      </Routes>
    </BrowserRouter>
  );
}

export default App;
