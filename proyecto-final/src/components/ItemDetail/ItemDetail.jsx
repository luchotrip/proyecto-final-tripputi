import React from 'react';

function ItemDetail({name, price, stock, category}) {
  return (
    <div className="item">
      <h2>{name}</h2>
      <h4>Precio: ${price}</h4>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default ItemDetail;
