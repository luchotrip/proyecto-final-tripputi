import React, {useState} from 'react';
import './ItemCount.scss';

function ItemCount({stock, initial, productsAdded}) {
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
    productsAdded(count);
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
