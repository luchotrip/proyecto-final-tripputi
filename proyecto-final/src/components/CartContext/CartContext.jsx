import React, {createContext, useContext, useState} from 'react';

export const CartContext = createContext({
  getCartQuantity: () => {},
  getTotal: () => {}
});

export const useCartContext = () => useContext(CartContext);

const CartContextProvider = ({children}) => {
  const [cartList, setCartList] = useState([]);

  function addToCart(item, quantity) {
    if (isInCart(item.id)) {
      return setCartList(
        cartList.map((product) =>
          product.id === item.id
            ? {...product, quantity: product.quantity + quantity}
            : product
        )
      );
    }
    setCartList([...cartList, {...item, quantity}]);
  }

  function deleteById(id) {
    setCartList(cartList.filter((item) => item.id !== id));
  }

  function emptyCart() {
    setCartList([]);
  }

  function isInCart(id) {
    return cartList.some((item) => item.id === id);
  }

  const getCartQuantity = () => {
    return cartList.reduce((total, value) => {
      return total + value.quantity
    }, 0)
  }

  const getTotal = () => {
    return cartList.reduce((total, value) => {
      return total += (value.quantity * value.price)
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        addToCart,
        deleteById,
        emptyCart,
        getTotal,
        getCartQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
