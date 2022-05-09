import React, {useEffect, useState} from 'react';
import { getItem } from '../../services/getData';
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss';
import {useParams} from "react-router-dom";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    getItem(id)
      .then((response) => setProduct(response))
      .catch((error) => console.log("Error: ", error))
  }, [id]);


  return (
    <div className="itemDetailContainer">
      <ItemDetail key={product.id} name={product.name} price={product.price} stock={product.stock} category={product.category}/>
    </div>
  );
}

export default ItemDetailContainer;
