import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
import { getData } from '../../services/getData';
import {useParams} from "react-router-dom";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getData(categoryId)
      .then((response) => setProducts(response))
      .catch((error) => console.log("Error: ", error))
  }, [categoryId]);

  return (
    <div>
      <h1>{props.greeting}</h1>
      {/*<ItemCount stock="5" initial="0"/>*/}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
