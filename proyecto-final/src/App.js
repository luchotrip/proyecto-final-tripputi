import './App.css';
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import React from "react";
import Cart from "./components/Cart/Cart";
import CartContextProvider from "./components/CartContext/CartContext";

function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route exact path="/" element={<ItemListContainer/>}/>
        <Route exact path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route exact path="/category/:categoryId" element={<ItemListContainer/>}/>
        <Route exact path="/cart" element={<Cart/>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
