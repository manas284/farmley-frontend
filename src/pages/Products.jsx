import React, { useState, useEffect } from 'react';
import axios from '../api/axios';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState('All');

  const categories = ['All', 'Nuts', 'Seeds', 'Dried Fruits', 'Gift Boxes'];

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('/products'); // adjust your backend API route
        setProducts(response.data);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };
    fetchProducts();
  }, []);

  const filteredProducts = category === 'All'
    ? products
    : products.filter(p => p.category === category);

  return (
    <div className="products-page">
      <h1>Explore Our Premium Dry Fruits</h1>

      <div className="category-filter">
        {categories.map(cat => (
          <button
            key={cat}
            className={category === cat ? 'active' : ''}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="product-grid">
        {filteredProducts.map(product => (
          <div className="product-card" key={product._id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button>View Details</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
