import {useState} from "react";
import useCounter from "../hooks/useCounter";

export default function Counter(props) {
  const {count, increment, decrement, clear} = useCounter(0);

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
      {count}
    </div>
  );
};
