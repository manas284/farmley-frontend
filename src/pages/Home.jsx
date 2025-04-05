import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to Farmley</h1>
          <p>Your one-stop destination for premium quality dry fruits.</p>
          <p>Experience the goodness of nature with every snack!</p>
          <h2 className="tagline">"Pure, Nutritious, and Delicious Dry Fruits."</h2>
          <a href="/products" className="cta-btn">Shop Now</a>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <h2>About Farmley</h2>
        <p>
          At Farmley, we are passionate about bringing you the finest dry fruits directly from trusted farmers.
          Our commitment to quality and authenticity ensures that every product meets the highest standards.
          Whether it’s almonds, cashews, raisins, or dates, we deliver wholesome goodness to your doorstep.
        </p>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose">
        <h2>Why Choose Farmley?</h2>
        <ul>
          <li>✅ 100% Natural and Fresh</li>
          <li>✅ Ethically Sourced</li>
          <li>✅ Quality Assured</li>
        </ul>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <div className="testimonial-card">
          <p>"Absolutely love the freshness of Farmley’s almonds. Highly recommend!"</p>
          <h4>— Priya S.</h4>
        </div>
        <div className="testimonial-card">
          <p>"The best dry fruits I've ever had. Great taste and quality!"</p>
          <h4>— Rahul K.</h4>
        </div>
        <div className="testimonial-card">
          <p>"Perfect for gifting! The packaging was elegant and premium."</p>
          <h4>— Ananya M.</h4>
        </div>
      </section>
    </div>
  );
};

export default Home;
