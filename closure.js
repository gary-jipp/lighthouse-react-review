const myFunction = function() {

  // What happens next time we run this function?
  console.log("myFunction: count =", count);

  let count = 0;
  const increment = function() {
    count++;
    console.log("increment: count =", count);
  };

  return increment;
};

console.log("Calling myFunction()");
let increment = myFunction();
increment();
increment();
increment();
increment();

console.log("Calling myFunction() again");
increment = myFunction();
increment();
increment();
increment();