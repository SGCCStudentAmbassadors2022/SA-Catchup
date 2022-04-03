// Printing to Console
console.log("Hello world");

// Variables
// Don't need to initialise variables
var aNum = 3; //Global scope
console.log(aNum);

aNum = 10;
console.log(aNum);

let aNum2 = 4; // local scope
console.log(aNum2);

aNum2 = 5 ;
console.log(aNum2); //Assignment cannot be done again

const textinput = "bye";
console.log(textinput);
console.log(`good ${textinput}`);

textinput = "morning"
console.log(`good ${textinput}`); //error

//8 Data Types (we won't use all 7)
let number1  = 16 ; // Number data type
let string1 = "string"; //String data type
let boolean = true; // Boolean data type
let array1 = [1, 2, 3]; // Array - similar to Python lists
let object = {name: "Huiliang", age: 12}; //object data type
let undefineddata = undefined;
let nulldatatype = null; 

let afunc =  () => {}; // name = (args) => {code}

console.log(typeof nulldatatype);

let x = 12;
let y = "12";

console.log(x == y) ;//JS doesn't compare datatypes if you use ==
console.log(x === y);//compares the datatype
console.log(12 > 7);

console.log("a">3);
console.log(12 !== "12");

// Arrays
arr1 = [1, 2, 3];
console.log(arr1)
 //equivalent to append
arr1.push("end");
console.log(arr1);
// // removing the last element
arr1.pop()
console.log(arr1)

//slicing
arr2 = arr1.slice(0,3);
console.log(arr2);

//concatenation - joining arrays together
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];


// Functions

// Loops

// DOM - document object model