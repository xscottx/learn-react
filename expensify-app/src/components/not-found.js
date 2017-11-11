import React from 'react';
import { Link } from 'react-router-dom';

// <a> uses server-side routing
// <Link> uses client-side routing
// <NavLink> supports browser navigation link and add 'activeClassName' to show diff behavior
const NotFoundPage = () => (
  <div>
    404- <Link to="/">Go Home</Link>
  </div>
)

export default NotFoundPage;