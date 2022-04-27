import React from 'react';
import './ItemListContainer.scss';
import ItemCount from "../ItemCount/ItemCount";

function ItemListContainer(props) {
  return (
    <div>
      <h1>{props.greeting}</h1>
      <ul>
        <li>
          Item 1
        </li>
        <li>
          Item 2
        </li>
        <li>
          Item 3
        </li>
      </ul>
      <ItemCount stock="5" initial="0"/>
    </div>
);
}

export default ItemListContainer;
