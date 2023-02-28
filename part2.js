
// 1.
// Write a program that prompts the user for their name and age, and then 
// displays a message that says "Hello, [name]! You are [age] years old."
/*

const name=prompt('Enter the Name: ');
const age=prompt('Enter the age:  ');

console.log(`Hello, ${name}! You are ${age} years old. `);

*/



// 2.

// Write a program that calculates the area of a rectangle given its length 
// and width. Display the result to the user in a user-friendly way

/*

const length=Number(prompt('Enter the length of rectangle: '));
const width=Number(prompt('Enter the width of rectangle: '));

const area=length*width;
console.log(`The are of rectangle is ${area}`);

*/

// 3.

// Write a program that takes two numbers as input and performs all of the 
// basic arithmetic operations (addition, subtraction, multiplication, and 
// division) on them. Display the results to the user in a user-friendly way.

/*

let a=Number(prompt('Enter the first number: '));
let b=Number(prompt('Enter the second number: '));
let add,sub,mul,div;

add=a+b;
sub=a-b;
mul=a*b;
div=a/b;

console.log(`The result of Addition is ${add}`);
console.log(`The result of Subtraction is ${sub}`);
console.log(`The result of Multiplication is ${mul}`);
console.log(`The result of Divison is ${div}`)

*/

// 4.

// Write a program that prompts the user to enter a temperature in 
// Fahrenheit and then converts it to Celsius. Display the result to the user in 
// a user-friendly way.

/*

const celsiusTemp=Number(prompt('Enter the Celsius Temparature: '));
const FahrenheitTemp=(9*celsiusTemp+160)/5;
console.log(`The Farenheit Temparature is ${FahrenheitTemp}.`);

*/

// 5.

// Write a program that prompts the user to enter a number and then 
// determines whether it is even or odd. Display the result to the user in a 
// user-friendly way

// let num=Number(prompt('Enter the Number: '));

// if(num%2===0)
// {
//     console.log(`${num} is an even Number.`);
// }
// else{
//     console.log(`${num} is an odd Number.`);
// }