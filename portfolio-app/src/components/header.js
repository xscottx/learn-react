import React from 'react';
import { NavLink } from 'react-router-dom';
import Home from './home';
import Portfolio from './portfolio';
import Contact from './contact';

const Header = () => (
  <header>
    <h1>Portfolio</h1>
    <NavLink to="/" activeClassName="is-active" exact={true} >Home</NavLink>
    <NavLink to="/portfolio" activeClassName="is-active" >Portfolio</NavLink>
    <NavLink to="/contact" activeClassName="is-active" >Contact</NavLink>
  </header>
)

export default Header;
