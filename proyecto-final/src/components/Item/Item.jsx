import React from 'react';
import './Item.scss';

function Item({name, price, stock}) {
  return (
    <div className="item">
      <h2>{name}</h2>
      <h4>Precio: ${price}</h4>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default Item;
