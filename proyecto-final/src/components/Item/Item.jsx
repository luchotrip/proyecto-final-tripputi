import React from 'react';
import './Item.scss';
import {Link} from "react-router-dom";

function Item({product}) {
  return (
    <div className="item">
      <img alt={''} src={'https://www.dummyimage.com/200x100/000/fff'}/>
      <h2>{product.name}</h2>
      <Link to={'/item/' + product.id }>Ver Producto</Link>
    </div>
  );
}

export default Item;
