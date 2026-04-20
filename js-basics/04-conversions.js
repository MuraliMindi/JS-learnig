//NaN - Not a Number//

//Example 1//
let monthNumber = 145;

if (monthNumber < 1 || monthNumber > 12) {

    // Assigning monthNumber NaN as
    // month number is not valid
    monthNumber = Number.NaN;

    console.log("Month number should be"
                + " between 1 and 12");
}
else {
    console.log("We are in "+ monthNumber+" month")
}

//Example 2//
console.log(0 * Infinity)
console.log(Infinity / Infinity)
console.log(0 / 0)
console.log(Math.sqrt(-1))
console.log(Number("murali"))

//Example 3//
let marksScored = "45xyz"
let valueInNumberA= Number(marksScored)
console.log("The Actual Converted value of MarksScored is "+valueInNumberA); ///NaN//

//Number Conversion//
let scoreA = 45
let scoreB = null
let scoreC = undefined
let scoreD = true
let scoreE = "murali"

console.log("Score type is a "+typeof scoreA);
//let valueInNumberA= Number(scoreA)//
let valueInNumberB= Number(scoreB)
let valueInNumberC= Number(scoreC)
let valueInNumberD= Number(scoreD)
let valueInNumberE= Number(scoreE)

console.log("New Type is "+typeof valueInNumberA)
console.log("The Actual Converted value of ScoreA is "+valueInNumberA); ///NaN//
console.log("The Actual Converted value of ScoreB is "+valueInNumberB); ///Null//
console.log("The Actual Converted value of ScoreC is "+valueInNumberC); ///Undefined//
console.log("The Actual Converted value of ScoreD is "+valueInNumberD); ///Boolean//
console.log("The Actual Converted value of ScoreE is "+valueInNumberE); ///Boolean//

//Boolean Conversion//
let isLoggedIn = 1
let loginUser = "Murali"
let loginUser1 = ""

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn) ///Boolean/

let booleanIsLoginUser = Boolean(loginUser)
console.log(booleanIsLoginUser) ///Boolean/

let booleanIsLoginUser1 = Boolean(loginUser1)
console.log(booleanIsLoginUser1) ///Boolean/

//String Conversion//
let number = 23

let stringNumber= String (number)
console.log(stringNumber)

