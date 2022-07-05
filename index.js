// HOW TO PROPERLY CREATE A VARIABLE
// camelCase convention

// var something; // AVOID USING VAR
let myNewVar = "hello";
let _myNewVar = "a new variable"; // PERMITTED
let $anotherVar = "another variable"; // PERMITTED

// let 1abc = "testing"
let abc1 = "this is allowed";

console.log("-----------------STRINGS-----------------\n");

let newString = "Here's a new string";
let lastPart = "we are in class right now";

let combinedString = newString + ", " + lastPart;

console.log("COMBINED STRING", combinedString);

let alternativeString = 'Here\'s another \n'
+ 'string';
console.log("ALTERNATIVE STR", alternativeString);

let yetAnotherString = `This is just 
another string \" \' \` end`
console.log("ALTERNATIVE STR WITH BACKTICKS", yetAnotherString);

console.log("-----------------NUMBERS-----------------\n");
let integer = 200;
let floatingNumber = 12.9838;
let negative = -24;

console.log(integer);
console.log(floatingNumber);
console.log("this is the negative", negative);

console.log("divide an integer by a float:")
console.log(12 / 3.333)

console.log("divide by 0")
console.log(-42 / 0)

console.log("Creating a NaN")
console.log("Hello" * 12)

console.log("Modulo operator, is the number EVEN?")
console.log(6 % 2) 
console.log(9 % 2) 


console.log("-----------------UNDEFINED & NULL---------------\n");
negative = null;
console.log("this is the negative", negative);

let newVar;
console.log(newVar);
newVar = "here's a value";
console.log(newVar);

console.log("-----------------BOOLEAN-----------------------\n")
let boolean = true
let anotherBoolean = false

console.log(boolean);
console.log(anotherBoolean)

console.log("-----------------LOOSE TYPINGS----------------\n")
let thisIsALooseVariable = 123450
console.log("this contains a Number type")
console.log(thisIsALooseVariable * 2) // we can multiply

thisIsALooseVariable = "Now it becomes a string..."
thisIsALooseVariable = thisIsALooseVariable * 2 // this returns NaN because the value has become a Sting type
console.log(thisIsALooseVariable)

console.log(thisIsALooseVariable + 2)

// AVOIT THIS AT ALL COST
// NEVER EVER EVER assign values of different type to the same variable
// do not mix data types, otherwise, you could encounter issues or unexpected results


console.log("\n------------------PARSING-----------------\n")

let sugar = "80" // suppose we receive this from a user input in the DOM
let butter = "120.5g"
console.log("this is a string for sugar:", sugar)
console.log("this is a number for sugar:", parseInt(sugar)) // this ignores the floating points
console.log("this is a number for butter:", parseFloat(butter)) // this discards anything that is not a number, and maintains the floating points



console.log("------------------------LOGICAL OPERATORS--------------------------\n")
// They allow your computer to "think"+
// you will receive a Boolean from these operations onto which to base something else that needs to happen
console.log("\n------------------------GREATER THAN--------------------------\n")

let height = 160
let isTallEnough = height > 160
console.log("this is false, not greater:", isTallEnough)
let isTallEnough2 = height >= 160
console.log("this is true, not greater but equal:", isTallEnough2)

console.log("Is AAC greater than AAB?", "AAC" > "AAB")

height = 190
console.log("\n------------------------LESS THAN--------------------------\n")
let isUnder190 = height < 190
console.log("this is false, not lower than:", isUnder190)
let isUnderOrEqual190 = height <= 190
console.log("this is true, not lower than but equal:", isUnderOrEqual190)

console.log("\n------------------------EQUALITY--------------------------\n")
// ALWAYS USE ===
// NEVER USE ==
console.log("Is 60 as much as 80?", 60 === 80)

console.log("\n------------------------IN-EQUALITY--------------------------\n")
// ALWAYS USE !==
// NEVER USE !=
console.log("Is 60 differnt than 80?", 60 !== 80)

console.log("\n------------------------NOT OPERATOR--------------------------\n")
let contrary = !isUnder190

height = 192
console.log("\n------------------------COMBINE OPERATORS TOGETEHR (AND, OR)--------------------------\n")

console.log("\n------------------------AND OPERATOR--------------------------\n")

let isHeightBetween170And180 = height >= 170 && height <= 180
console.log("is it in ranage between 170 AND 180?", isHeightBetween170And180)

let eyeColor = "brown"


let isTallAndHasGreenEyes = height >= 190 && eyeColor === "green"
// true           true => true

console.log("Tall and Green Eyes", isTallAndHasGreenEyes)

let isTallerThan190 = height >= 190
let hasGreenEyes = eyeColor === "green"

let isTallAndHasGreenEyesSimplified = isTallerThan190 && hasGreenEyes

console.log("\n------------------------OR OPERATOR--------------------------\n")
 
// let hasBrightEyes = eyeColor === "blue" || eyeColor === "green" || eyeColor === "gray"
                        // false             OR     true            OR      false => true
// console.log("Are your Eyes BRIGHT?", hasBrightEyes)

let hasBrightEyesStrict = eyeColor === "blue" && eyeColor === "green" && eyeColor === "gray"
                    //      false             AND     true            AND      false => false
console.log("Do you have multicolored eyes?", hasBrightEyesStrict)

let isTallAndHasBrightEyes = height >= 170 && height <= 190 && eyeColor === "blue" || eyeColor === "green" || eyeColor === "gray"
//                              false         false  => false         false   => false             true => true               false => true
console.log(isTallAndHasBrightEyes)

let isTallAndHasBrightEyes2 = (height >= 170 && height <= 190) && (eyeColor === "blue" || eyeColor === "green" || eyeColor === "gray") 
//                                           false            &&               true       =>  false
console.log(isTallAndHasBrightEyes2)


height = 182
let isInHeightRange = height >= 170 && height <= 190 // true
let hasBrightEyes = eyeColor === "blue" || eyeColor === "green" || eyeColor === "gray" // true
let hasBrownEyes = eyeColor === "brown"
 

// ALWAYS HAVE VARIABLES CONTAINING BOOLEANS FORMED IN THE FORM OF A QUESTION
let isHeTallAndBright = isInHeightRange && hasBrightEyes // true && true => true

console.log("PREVIOUS VALUE", isHeTallAndBright)
console.log("CASTED VALUE", !isHeTallAndBright)


// this will cast people with bright eyes that are also tall
console.log("#1 casting")
if(isHeTallAndBright) { // true
    console.log("CONGRATULATIONS! You are being casted for the movie.... ")
} else {
    console.log("Sorry you are not meeting the requirements right now, try again another time please")
}

// I want to take only people that don't have briht eyes and are not in the range of 170 && 190
console.log("#2 casting")
if(!isHeTallAndBright) { // false will be casted to true
    console.log("CONGRATULATIONS! We didn't like tall and bright eyed people so we are taking you.... ")
} else {
    console.log("Sorry you are not meeting the requirements right now, try again another time please")
}

console.log("This will always run")


let price;
let isOnSale = false

if (isOnSale) {
    price = 59
    console.log("CURRENT PRICE is Discounted", price)
} else {
    price = 99
    console.log("CURRENT PRICE is the Full Price", price)
}

// TERNARY OPERATOR
/* This is a more compact alternative, absolutely identical to the previous IF-ELSE example
It only applies when we want to give a SPECIFIC VALUE to a variable based on a condition

As the '+=' sign, all these language features that allow us to write code that is
easier to read and write, are called SYNTACTIC SUGAR

*/
let salePrice = isOnSale ? 59 : 99

// console.log(salePrice)

console.log("The current price is", price, "are we on sale? " + isOnSale)


console.log("------------ TEMPLATE LITERAL ------------");
// Strings with superpowers
// when dealing with multiple variable to be shown and formatted in a string, template literals make more sense and are more manageable
// can break on multiple lines and accept the dynamic values ( variables ) inside of the string itself by using ${}, try them out!
console.log(`The current price is ${price}, 
are we on sale? ${isOnSale}`)

