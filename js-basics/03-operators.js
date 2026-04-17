let a=5,b=10;

// Arthematic
console.log("Sum of a and b:", a+b)
console.log("Difference of a and b:", a-b)
console.log("Product of a and b:", a*b)
console.log("Quotient of a and b:", a/b)
console.log("Remainder of a and b:", a%b)

// logical
let isAdult=true, hasDrivingLicense=false
console.log("Is the person eligible to drive?", isAdult && hasDrivingLicense)
console.log("Is the person eligible to drive?", isAdult || hasDrivingLicense)
console.log("Is the person not eligible to drive?", !isAdult)

// Comparison
console.log("Is a greater than b?", a>b)
console.log("Is a less than b?", a<b)
console.log("Is a equal to b?", a==b)
console.log("Is a not equal to b?", a!=b)
   
// Assignment
let x=10
let y=++x
console.log("Value of x after pre-increment:", x)
console.log("Value of y after pre-increment:", y)
let z=x++
console.log("Value of x after post-increment:", x)
console.log("Value of z after post-increment:", z)
x+=5 // x=x+5
console.log("Value of x after addition:", x)
x-=3 // x=x-3
console.log("Value of x after subtraction:", x)
x*=2 // x=x*2
console.log("Value of x after multiplication:", x)
x/=4 // x=x/4
console.log("Value of x after division:", x)
x%=3 // x=x%3
console.log("Value of x after modulus:", x)
