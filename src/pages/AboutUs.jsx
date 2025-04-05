import React from 'react';
import './AboutUs.css'; // Optional for custom styles

const AboutUs = () => {
  return (
    <div className="about-us-container" style={{ padding: '2rem', lineHeight: '1.7' }}>
      <h1>About Us</h1>

      <section>
        <h2>Our Story</h2>
        <p>
          Welcome to <strong>Farmley</strong>, where quality meets tradition. Our journey began with a simple goal — 
          to bring the finest dry fruits from trusted farmers directly to your home. With a focus on purity and freshness, 
          we ensure every bite is packed with nutrition and taste.
        </p>
        <p>
          At Farmley, we celebrate the rich heritage of dry fruits while embracing innovation to meet modern tastes. 
          From carefully selecting premium nuts to delivering them with care, our passion drives everything we do.
        </p>
      </section>

      <section>
        <h2>Sustainability</h2>
        <ul>
          <li><strong>Eco-Friendly Practices:</strong> Minimizing carbon footprints and reducing waste.</li>
          <li><strong>Fair Trade Partnerships:</strong> Empowering farmers with fair wages and better opportunities.</li>
          <li><strong>Sustainable Packaging:</strong> Using recyclable and biodegradable materials.</li>
        </ul>
        <p>Choosing Farmley means supporting a greener, healthier future.</p>
      </section>

      <section>
        <h2>Why Choose Us</h2>
        <ul>
          <li><strong>Premium Quality:</strong> Sourced from the best farms, processed with utmost care.</li>
          <li><strong>No Additives or Preservatives:</strong> Pure, natural goodness in every bite.</li>
          <li><strong>Certified Excellence:</strong> Compliant with industry standards for safety and quality.</li>
          <li><strong>Customer-Centric Service:</strong> Dedicated support to ensure a seamless shopping experience.</li>
        </ul>
        <p>
          Join us on this journey of taste, health, and sustainability — because at Farmley, 
          we believe in nourishing lives, one nut at a time.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
