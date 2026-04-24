//example1: function without return//
function addTwoNumbers(num1, num2) {
    console.log(num1 + num2);
}
addTwoNumbers(20, 10); // Output: 30, The function is called with arguments 20 and 10, and it logs the sum of these two numbers to the console.

//example2: function with return//
function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}
const result = multiplyTwoNumbers(5, 10); // Output: 50, The function is called with arguments 5 and 10, and it returns the product of these two numbers.
console.log(result);

//example3: function with default parameters//  
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}   
greet(); // Output: Hello, Guest!, The function is called without any arguments, so it uses the default value "Guest" for the name parameter and logs the greeting to the console.
greet("Mindi"); // Output: Hello, Mindi!

//example4: function with rest parameters// 
function sumAll(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}   