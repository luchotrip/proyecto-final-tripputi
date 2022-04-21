import React from 'react';
import './NavBar.scss';
import CartWidget from "../CartWidget/CartWidget";

function NavBar(props) {
  return (
    <div className='myMenu'>
      <h1>Ropa Pepito</h1>
      <ul className='nav'>
        <li><a href='#' onClick={(() => alert('¡Proximamente!'))}>Remeras</a></li>
        <li><a href='#' onClick={(() => alert('¡Proximamente!'))}>Jeans</a></li>
        <li><a href='#' onClick={(() => alert('¡Proximamente!'))}>Pantalones</a></li>
      </ul>
      <CartWidget/>
    </div>
  );
}

export default NavBar;
