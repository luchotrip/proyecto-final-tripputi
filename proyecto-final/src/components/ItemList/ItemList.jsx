import React from 'react';
import Item from "../Item/Item";
import './ItemList.scss';

function ItemList({products}) {
  return (
    <div className="itemList">
      {products.map((product => {
        return <Item key={product.id} product={product}/>
      }))
      }
    </div>
  );
}

export default ItemList;
