import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemCount from "../ItemCount/ItemCount";
import ItemList from "../ItemList/ItemList";
import getData from "../../services/getData";

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData
      .then((response) => setProducts(response))
      .catch((error) => console.log("Error: ", error))
  }, []);

  return (
    <div>
      <h1>{props.greeting}</h1>
      {/*<ItemCount stock="5" initial="0"/>*/}
      <ItemList products={products} />
    </div>
  );
}

export default ItemListContainer;
