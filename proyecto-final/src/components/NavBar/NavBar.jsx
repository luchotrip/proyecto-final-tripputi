import React from 'react';
import './NavBar.scss';
import CartWidget from "../CartWidget/CartWidget";
import {Link, NavLink} from "react-router-dom";

function NavBar() {
  return (
    <div className='myMenu'>
      <h1> <Link to={'/'}>Ropa Pepito</Link></h1>
      <ul className='nav'>
        <li><NavLink to={'/category/Womens Footwear'}>Womens Footwear</NavLink></li>
        <li><NavLink to={'/category/Mens Footwear'}>Mens Footwear</NavLink></li>
        <li><NavLink to={'/category/Womens Casualwear'}>Womens Casualwear</NavLink></li>
        <li><NavLink to={'/category/Mens Casualwear'}>Mens Casualwear</NavLink></li>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
