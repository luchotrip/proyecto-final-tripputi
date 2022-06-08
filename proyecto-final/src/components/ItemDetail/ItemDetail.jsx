import React, {useState} from 'react';
import './ItemDetail.scss';
import ItemCount from "../ItemCount/ItemCount";
import {Link} from "react-router-dom";
import {useCartContext} from "../CartContext/CartContext";

function ItemDetail({id,name, price, stock}) {
  const [productsAdded, setProductsAdded] = useState(false);
  const { addToCart } = useCartContext();

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
        <button className={"finishBuy"} onClick={() => addToCart({ id: id, name: name, price: price }, productsAdded)}><Link to={'/cart'}>Terminar compra ({productsAdded})</Link></button>}
    </div>
  );
}

export default ItemDetail;
