import {useState} from "react";

export default function Counter(props) {
  console.log("Rendering Counter");
  const [count, setCount] = useState(0);

  const increment = function() {
    console.log("count=", count);
    setCount(count + 1);
    // setCount(prev => prev + 1);
  };

  const decrement = function() {
    console.log("count=", count);
    setCount(count - 1);
  };

  const clear = function() {
    console.log("count=", count);
    setCount(0);
  };

  return (
    <div>
      <button onClick={decrement}>-</button>
      <button onClick={clear}>0</button>
      <button onClick={increment}>+</button>
      {count}
    </div>
  );
};
