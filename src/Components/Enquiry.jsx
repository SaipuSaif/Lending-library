import React, { useState } from "react";

const Enquiry = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your enquiry has been submitted.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="enquiry-bg">
      <div className="enquiry-page">
        {/* ✅ Site Information Section */}
        <div className="site-info">
          <h1>About The Lending Library</h1>
          <p>
            Welcome to <strong>The Lending Library</strong>, your one-stop
            destination for exploring, borrowing, and enjoying a wide variety of
            books. Our mission is to make knowledge and stories accessible to
            everyone.
          </p>
          <p>
            Whether you’re a casual reader, a student, or a book enthusiast,
            we’ve got something special for you. Feel free to reach out through
            the enquiry form below for any questions, suggestions, or support.
          </p>
          <hr />
        </div>

        {/* Enquiry Form */}
        <h2>Enquiry Form</h2>
        <form onSubmit={handleSubmit} className="enquiry-form">
          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div> <br />
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div> <br />
          <div className="form-group">
            <label>Message:</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="btn-container">
            <button type="submit" className="btn-submit">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Enquiry;
