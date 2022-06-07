import React, {useState} from 'react';
import './Checkout.scss';
import {useCartContext} from "../CartContext/CartContext";
import {collection, addDoc, getFirestore} from "firebase/firestore";

function Checkout() {

  const {cartList, getTotal} = useCartContext();

  const [buyer, setBuyer] = useState({
      Name: '',
      Email: '',
      Phone: ''
    }
  )

  const {Name, Email, Phone} = buyer;

  const handleInputChange = (e) => {
    setBuyer(({
      ...buyer,
      [e.target.name]: e.target.value
    }))
  }

  const generateOrder = async (data) => {
    try {
      const db = getFirestore();
      const col = collection(db, "Orders");
      const order = await (addDoc(col, data));
    } catch (error) {
      console.log(error)
    }

    document.getElementById("order").reset();
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date();
    const products = cartList.map(e => {
      return {id: e.id, name: e.name, price: e.price, quantity: e.quantity}
    })
    const total = getTotal();
    const data = {buyer, products, total, date}
    generateOrder(data);
  }

  return (
    <div className="checkout">
      <h1>Finalizar compra:</h1>
      <h2>Por favor, completa los siguientes datos.</h2>
      <form id={"order"} onSubmit={handleSubmit}>
        <input type={"text"} placeholder={"Your name"} name={"Name"} value={Name} onChange={handleInputChange}
               required/>
        <input type={"number"} placeholder={"Your phone number"} name={"Phone"} value={Phone}
               onChange={handleInputChange} required/>
        <input type={"email"} placeholder={"Your email"} name={"Email"} value={Email} onChange={handleInputChange}
               required/>
        <input type={"submit"} value={"Finalizar Compra"}/>
      </form>

    </div>
  );
}

export default Checkout;
