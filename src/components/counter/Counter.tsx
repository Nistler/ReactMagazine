import React, {useState} from 'react';
import './Counter.scss'

export const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  }

  const decrement = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <p>
        <div>
          {count}
          <button className={'incr-button'} onClick={increment}>+</button>
          <button className={'decr-button'} onClick={decrement}>–</button>
        </div>
      </p>
    </div>
  );
};
