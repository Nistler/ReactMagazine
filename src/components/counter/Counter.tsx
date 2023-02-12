import React, {useState} from 'react';
import classes from './Counter.module.scss';

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
          <button className={classes['incr-button']} onClick={increment}>+</button>
          <button className={classes['decr-button']} onClick={decrement}>–</button>
        </div>
      </p>
    </div>
  );
};
