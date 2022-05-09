import React from 'react';
import './ItemDetail.scss';

function ItemDetail({name, price, stock, category}) {
  return (
    <div className="itemDetail">
      <h2>{name}</h2>
      <img alt={''} src={'https://www.dummyimage.com/500x400/000/fff'}/>
      <h4>${price}</h4>
      <p>Stock: {stock}</p>
    </div>
  );
}

export default ItemDetail;
