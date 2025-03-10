
export default function Counter(props) {
  console.log("Rendering Counter");

  let count = 0;

  const increment = function() {
    console.log("count=", count);
    count++;
  };

  return (
    <div>
      <button onClick={increment}>+</button> {count}
    </div>
  );
};
