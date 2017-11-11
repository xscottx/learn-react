import React from 'react';
import { Link } from 'react-router-dom';

const Portfolio = () => (
  <div>
    <p>This is my portfolio.</p>
    <Link to="/portfolio/1">Portfolio 1</Link>
    <Link to="/portfolio/2">Portfolio 2</Link>
  </div>
)

export default Portfolio;