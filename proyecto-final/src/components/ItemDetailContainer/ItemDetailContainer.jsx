import React, {useEffect, useState} from 'react';
import ItemDetail from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss';
import {useParams} from "react-router-dom";
import {doc, getDoc, getFirestore} from "firebase/firestore";

function ItemDetailContainer() {
  const [product, setProduct] = useState([]);
  const {id} = useParams();

  function getItem(id) {
    const db = getFirestore();
    const itemRef = doc(db, 'items', id);
    return getDoc(itemRef);
  }

  useEffect(() => {
    getItem(id)
      .then(snapshot => {
        setProduct({...snapshot.data(), id: snapshot.id})
      })
      .catch((error) => console.log("Error: ", error))
  }, [id]);

  return (
    <div className="itemDetailContainer">
      <ItemDetail key={product.id} id={product.id} name={product.name} price={product.price} stock={product.stock}
                  category={product.category}/>
    </div>
  );
}

export default ItemDetailContainer;
