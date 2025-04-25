import {useState} from "react";

export default function useCounter(initial) {
  const [count, setCount] = useState(initial);

  const increment = function() {
    setCount(prev => prev + 1);
  };

  const decrement = function() {
    setCount(prev => prev - 1);
  };

  const clear = function() {
    setCount(0);
  };

  return {count, increment, decrement, clear};
};
