import React from 'react';
import Item from "../Item/Item";
import './ItemList.scss';

function ItemList({products}) {
  return (
    <div className="itemList">
      {products.map((product => {
        return <Item key={product.id} name={product.name} price={product.price} stock={product.stock}/>
      }))
      }
    </div>
  );
}

export default ItemList;
