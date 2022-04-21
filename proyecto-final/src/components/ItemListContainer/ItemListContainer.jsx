import React from 'react';
import './ItemListContainer.scss';

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
    </div>
  );
}

export default ItemListContainer;
