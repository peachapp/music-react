import React, { useState, useEffect, useCallback } from 'react';
import './index.less';

const HomeModel = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  useEffect(() => {
    console.log('effect')
    console.log('dom', document.getElementsByClassName('home-container')[0])
  }, [count]);
  return { count, setCount, count2, setCount2 };
}

const Home = () => {
  const { count, setCount, count2, setCount2 } = HomeModel();
  return <div className="container home-container">
    home
    <div>count:{count}</div>
    <button onClick={() => { setCount(count + 1) }}>+</button>
    <button onClick={() => { setCount(count - 1) }}>-</button>
    <hr />
    <div>count:{count2}</div>
    <button onClick={() => { setCount2(count2 + 1) }}>+</button>
    <button onClick={() => { setCount2(count2 - 1) }}>-</button>
  </div>
};

export default React.memo(Home);
