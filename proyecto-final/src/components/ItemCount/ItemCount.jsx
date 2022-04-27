import React, {useState, useEffect} from 'react';
import './ItemCount.scss';

function ItemCount({stock, initial, onAdd}) {
  const [count, setCount] = useState(0);

  const Increase = () => {
    const newValue = count + 1;
    if (newValue <= stock) {
      setCount(newValue);
    }
  }

  const Decrease = () => {
    const newValue = count - 1;
    if (newValue >= initial) {
      setCount(newValue);
    }
  }

  const OnAdd = () => {
    alert("Se agregaron " + count + " productos al carrito");
  }

  return (
    <div className='productsCounter'>
      <div>
        <button className='btnIncrease' onClick={Decrease}>-</button>
        <p>{count}</p>
        <button className='btnDecrease' onClick={Increase}>+</button>
      </div>
      <div>
        <button className='addCart' onClick={OnAdd}>Agregar al Carrito</button>
      </div>
    </div>
  );
}

export default ItemCount;
