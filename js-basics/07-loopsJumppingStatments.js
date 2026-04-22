//Find the prime numbers from top 20 using while loop//

let i = 2;

while(i%2==0 && i<=20){
    console.log("The number is a prime number "+i)
    i+=2
}


////Find the non prime numbers from top 20 using do while loop//
let j = 1;

do {
    if(j%2!=0 && j<=20){
        console.log("The number is a non prime number "+j)
    }
    j++
} while(j<=20)  

// Sum of numbers from 1 to 10 using for loop//
let sum = 0;

for (let i = 1; i <= 10; i++) 
    {
    sum += i;
}
console.log("The sum of numbers from 1 to 10 is: " + sum);
