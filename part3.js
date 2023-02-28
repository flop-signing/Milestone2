// 1. 

// Write a program that takes a number as input and displays a 
// message if the number is positive, negative, or zero.

/*

let num=Number(prompt('Enter the Number: '));
 if(num>0)
 {
    console.log(`${num} is Positive`)
 }
 else if(num<0)
 {
    console.log(`${num} is negative`)
 }
else{
    console.log(`Num is ${num}`)
}

*/

// 2.

// Write a program that takes two numbers as input and 
// determines which one is larger. Display the result to the user 
// in a user-friendly way.

/*

let num1=Number(prompt('Enter the number1: '));
let num2=Number(prompt('Enter the number2: '));

if(num1>num2)
{
    console.log(`${num1} is greater than ${num2}`);
}
else if(num1<num2)
{
    console.log(`${num2} is greater than ${num1}`);

}
else{
    console.log(`${num1} and ${num2} are equal.`)
}

*/

// 3.

// Write a program that prompts the user to enter their age and 
// then displays a message that tells them whether they are old 
// enough to vote or not. (must be at least 18 to vote)

/*

let age=Number(prompt('Enter the Age of Person: '));

if(age>=18)
{
    console.log('This person is old enough to vote.')
}
else{
    console.log('This person is not old enough to vote.')
}

*/


// 4.

// Write a program that takes three numbers as input and 
// determines whether they form a Pythagorean triple or not. 
// Display the result to the user in a user-friendly way.

/*

let num1,num2,num3;
num1=Number(prompt('Enter the Number1: '));
num2=Number(prompt('Enter the Number2: '));
num3=Number(prompt('Enter the Number3: '));

let sqNum1,sqNum2,sqNum3;

sqNum1=num1*num1;
sqNum2=num2*num2;
sqNum3=num3*num3;


if(sqNum1+sqNum2===sqNum3 || sqNum1+sqNum3===sqNum2 || sqNum2+sqNum3===sqNum1){
    console.log(`${num1},${num2} and ${num3} are Pythagron Triple.`)
}
else
{
    console.log(`${num1},${num2} and ${num3} are not Pythagron Triple.`)   
}

*/

// 5.

// Write a program that prompts the user to enter a grade (in 
//     letters) and then displays the corresponding grade point 
//     average (GPA). For example, "A" = 4.0, "B" = 3.0, etc

/*

let grade=prompt('Please enter the Grade: ');

if(grade==='A+')
{
    console.log('"A+" = 4.00');
}
else if(grade==='A')
{
    console.log('"A" = 3.75');
}
else if(grade==='A-')
{
    console.log('"A-" = 3.50');
}
else if(grade==='B+')
{
    console.log('"B+" = 3.25');
}
else if(grade==='B')
{
    console.log('"B" = 3.00');
}
else if(grade==='B-')
{
    console.log('"B-" = 2.75');
}
else if(grade==='C+')
{
    console.log('"C+" = 2.50');
}
else if(grade==='C')
{
    console.log('"C" = 2.25');
}

else if(grade==='D')
{
    console.log('"D" = 2.00');
}
else
{
    console.log('"F" = 0.00');
}

*/