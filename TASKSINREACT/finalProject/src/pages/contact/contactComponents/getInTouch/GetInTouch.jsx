import React, { useState } from 'react';
import './getInstyle/getIn.scss';
import supportImage from './getInstyle/Group 124.png'; 

const GetInTouch = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    alert('Message sent!');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="get-in-touch-container">
      <div className="get-in-touch-form-wrapper">
        <h2 className="title">Get In Touch</h2>
        <p className="subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.
        </p>

        <form onSubmit={handleSubmit} className="get-in-touch-form">
          <div className="row">
            <input
              type="text"
              placeholder="Your Name*"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              placeholder="Your E-mail"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="text"
            placeholder="Subject*"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            placeholder="Type Your Message*"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>

          <button type="submit">Send Mail</button>
        </form>
      </div>

      <div className="get-in-touch-image">
        <img src={supportImage} alt="Support illustration" />
      </div>
    </div>
  );
};

export default GetInTouch;
