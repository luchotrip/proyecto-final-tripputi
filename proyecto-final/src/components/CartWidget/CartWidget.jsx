import React from 'react';
import icon from './img/shopping-cart.svg';
import {Link} from "react-router-dom";

function CartWidget() {
  return (
    <Link to={'/cart'}>
      <img src={icon} alt={'shopping cart'}/>
    </Link>
  );
}

export default CartWidget;
