function outer() {
  let count = 0;//count variable is created in the outer function scope
  function inner() {
    count++;//inner function has access to the count variable of the outer function
    console.log(count);//each time inner function is called, it increments the count variable and logs it
  }
 
  return inner;//the inner function is returned, creating a closure that retains access to the count variable
}
outer(); // The outer function is called, which initializes the count variable and returns the inner function. However, since we are not storing the returned inner function in a variable, we won't be able to call it directly. To demonstrate the closure, we need to store the returned inner function in a variable and then call it multiple times to see how it retains access to the count variable.
//const counter = outer(); //innerfunction reference is stored in counter variable
//counter(); // Output: 1, The inner function is called, incrementing count to 1 and logging it
//counter(); // Output: 2, The inner function is called again, incrementing count to 2 and logging it
//counter(); // Output: 3, The inner function is called once more, incrementing count to 3 and logging it
// Each call to counter() demonstrates that the inner function retains access to the count variable, allowing it to maintain state across multiple calls.
// This code demonstrates how closures work in JavaScript, allowing the inner function to access and modify the variables of the outer function even after the outer function has finished executing.
// In this example, the inner function forms a closure that captures the count variable from the outer function's scope. Each time the inner function is called, it updates and logs the count variable, demonstrating how closures allow functions to retain access to their lexical environment.
// Closures are a powerful feature in JavaScript that enable functions to have private variables and maintain state across multiple invocations, making them essential for various programming patterns and techniques.