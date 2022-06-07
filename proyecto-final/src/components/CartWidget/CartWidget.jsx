import React from 'react';
import icon from './img/shopping-cart.svg';
import {Link} from "react-router-dom";
import {useCartContext} from "../CartContext/CartContext";
import './CartWidget.scss';

function CartWidget() {
  const {cartList} = useCartContext();

  let sum = cartList.reduce(function(prev, current) {
    return prev + +current.quantity
  }, 0);

  return (
    <Link to={'/cart'} className={cartList.length < 1 ? 'cartWidget' : 'cartWidget show'}>
      <img src={icon} alt={'shopping cart'}/><span>{sum}</span>
    </Link>
  );
}

export default CartWidget;
