//Example1//

let email = "";

if (email) {    
    console.log("You have entered email id");
}       
else {
    console.log("Please enter email id");
}

//Example2//
let ticketNumber = 0;

if (ticketNumber) {
    console.log("You have a ticket number");
}
else {
    console.log("Please enter a ticket number");
}

//Example3//
let age = 18, isPaid = true, isVerfied = true

if (age>=18 && isPaid && isVerfied) {
    console.log("You are eligible to access the content");
}       
else {
    console.log("You are not eligible to access the content");
}

//Example4//
let isUserLoggedIn = false

if (isUserLoggedIn) {   
    console.log("Welcome to the dashboard");
}       
else {
    console.log("Please login to access the dashboard");
}

//Example5//
let monthNumber = NaN;

if ( monthNumber > 1 && monthNumber < 12) {
    console.log("We are in "+ monthNumber+" month")
}
else {
    console.log("Invalid month number, month number should be between 1 and 12");
    
}