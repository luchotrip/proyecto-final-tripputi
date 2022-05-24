import React from 'react';
import './Cart.scss';
import {useCartContext} from "../CartContext/CartContext";
import {Link} from "react-router-dom";

function Cart() {
  const {cartList, emptyCart, deleteById} = useCartContext();
  return (
    <div className={"cart"}>
      <h1>Carrito</h1>
      {cartList.length <= 0 ? <span>No hay productos en el carrito</span> :
        <span>{'Hay ' + cartList.length + ' producto/s en el carrito.'}</span>}
      {cartList.length > 0 &&
      cartList.map((item) => (
        <div key={item.id}>
            <span>
              Nombre {item.name}, precio ${item.price}, unidades:{' '}
              {item.quantity}
            </span>
          <button className={"btnRemove"} onClick={() => deleteById(item.id)}>Remover</button>
        </div>
      ))}
      <div className={"buttons"}>
        {cartList.length <= 0 ? <button><Link to={'/'}>Volver a la tienda</Link></button> :
          <button className={"btnEmpty"} onClick={() => emptyCart()}>Vaciar</button>}

        <button className={"btnEndBuy"}><Link to={'/checkout'}>Finalizar Compra</Link></button>
      </div>
    </div>
  );
}

export default Cart;
