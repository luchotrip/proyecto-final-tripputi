import React, {useEffect, useState} from 'react';
import './ItemListContainer.scss';
import ItemList from "../ItemList/ItemList";
// import {getData} from '../../services/getData';
import {useParams} from "react-router-dom";
import {collection, getDocs, getFirestore, query, where} from 'firebase/firestore';

function ItemListContainer(props) {
  const [products, setProducts] = useState([]);
  const {categoryId} = useParams();

  useEffect(() => {
    const db = getFirestore();
    // items es la coleccion que creamos en firebase
    const itemCollection = collection(db, 'items');

    const q = categoryId && query(
      itemCollection,
      where ("category", "==", categoryId)
    );

    getDocs(q || itemCollection)
      .then(snapshot => {
        setProducts(snapshot.docs.map(doc => {
          return {...doc.data(), id: doc.id}
        }));
      })
      .catch(
        err => console.log(err)
      )
  }, [categoryId]);

  return (
        <div>
      {products.length > 1 ? <ItemList products={products}/> : <p>No hay productos cargados con esa categoría en Firebase =(</p>}
    </div>
  );
}

export default ItemListContainer;
