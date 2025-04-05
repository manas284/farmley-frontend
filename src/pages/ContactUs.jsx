import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Replace with actual API integration
    alert('Thank you for contacting us!');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>

      <div className="contact-content">
        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h3>Reach Us</h3>
          <p><strong>Address:</strong> Farmley Office Address</p>
          <p><strong>Phone:</strong> +91-XXXXXXXXXX</p>
          <p><strong>Email:</strong> support@farmley.com</p>
          <p><strong>Hours:</strong> Mon–Sat, 9 AM–6 PM</p>

          <h3>Follow Us</h3>
          <div className="social-links">
            <a href="#" target="_blank" rel="noreferrer">Facebook</a>
            <a href="#" target="_blank" rel="noreferrer">Instagram</a>
            <a href="#" target="_blank" rel="noreferrer">Twitter</a>
            <a href="#" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>
      </div>

      {/* Embedded Google Map (optional) */}
      <div className="map-container">
        <iframe
          title="Farmley Location"
          src="https://www.google.com/maps/place/ZUDIO+-+Old+Palasiya,+Indore/@22.7277954,75.8885175,17z/data=!3m1!4b1!4m6!3m5!1s0x3962fd08092e1f9b:0x76407b80164dafa8!8m2!3d22.7277954!4d75.8885175!16s%2Fg%2F11ryf5g_3m?entry=ttu&g_ep=EgoyMDI1MDQwMi4xIKXMDSoASAFQAw%3D%3D"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;
