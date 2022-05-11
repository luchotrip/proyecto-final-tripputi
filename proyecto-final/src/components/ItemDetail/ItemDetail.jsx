import React, {useState} from 'react';
import './ItemDetail.scss';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";

function ItemDetail({name, price, stock}) {
  const [productsAdded, setProductsAdded] = useState(false);

  const handleEvent = event => {
    setProductsAdded(event);
  };

  return (
    <div className="itemDetail">
      <h2>{name}</h2>
      <img alt={''} src={'https://www.dummyimage.com/500x400/000/fff'}/>
      <h4>${price}</h4>
      <p>Stock: {stock}</p>
      {!productsAdded ? <ItemCount productsAdded={handleEvent} stock={stock} initial={0}/> :
        <button><Link to={'/cart'}>Terminar compra ({productsAdded})</Link></button>}
    </div>
  );
}

export default ItemDetail;
