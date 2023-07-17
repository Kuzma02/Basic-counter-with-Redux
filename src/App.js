import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './app/counter';

function App() {
  const count = useSelector(state => state.counter.count); 
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(100))}>Increment by 100</button>
    </div>
  );
}

export default App;
