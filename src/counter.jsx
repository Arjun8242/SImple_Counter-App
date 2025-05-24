import React, { useState } from 'react';
import './Counter.css';

function Counter() {
  const [count, setCount] = useState(0);
  const min = 0;
  const max = 1000;

  const increase = () => {
    if (count < max) {
      setCount(prev => prev + 1);
    }
  };

  const decrease = () => {
    if (count > min) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="counter-container">
      <h1>⚡ Simple Counter App</h1>
      <h2>Count: {count}</h2>
      
      <div className="buttons">
        <button onClick={increase} disabled={count === max}>➕ Increase</button>
        <button onClick={decrease} disabled={count === min}>➖ Decrease</button>
      </div>

      <p className="info">
        Min: {min} | Max: {max}
      </p>
    </div>
  );
}

export default Counter;
