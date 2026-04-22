//Print if numer is a prime number//

let a=11

if(a%2==0){
    console.log("The number is a prime number")
}   
else{
    console.log("The number is not a prime number")
}   

//Find the greater number between three numbers//

let b = 25,c= 15, d= 20

if(b>c && b>d){
    console.log("The greater number is "+b)
}
else if(c>b && c>d){
    console.log("The greater number is "+c)
}
else{
    console.log("The greater number is "+d)
}

//Find the correct age to retire//

let age = 30    
switch(age){
    case 60:
        console.log("You are eligible to retire")
        break
    case 40:
        console.log("You are not eligible to retire")
        break
    case 30:
        console.log("Enjoy your work and retire at the right age")
        break
    case 20:
        console.log("Enjoy your studies and retire at the right age")
        break
    case 15:
        console.log("Enjoy your childhood and shooling")
        break

    default:
        console.log("Please enter a valid age")
}