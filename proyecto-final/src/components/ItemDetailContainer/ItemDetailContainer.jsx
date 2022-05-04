import React, {useEffect, useState} from 'react';
import getItem from "../../services/getData";
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss';

function ItemDetailContainer(props) {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getItem
      .then((response) => setProduct(response))
      .catch((error) => console.log("Error: ", error))
  }, []);

  return (
    <div className="itemDetailContainer">
      <ItemDetail key={product.id} name={product.name} price={product.price} stock={product.stock} category={product.category}/>
    </div>
  );
}

export default ItemDetailContainer;
