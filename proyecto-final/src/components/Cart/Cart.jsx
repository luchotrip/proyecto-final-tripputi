import React from 'react';
import './Cart.scss';
import {useCartContext} from "../CartContext/CartContext";

function Cart() {
  const {cartList, emptyCart, deleteById} = useCartContext();
  return (
    <div className={"cart"}>
      <h1>Carrito</h1>
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
        <button className={"btnEmpty"} onClick={() => emptyCart()}>Vaciar</button>
      </div>
    </div>
  );
}

export default Cart;
