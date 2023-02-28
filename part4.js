// 1.

// Write a function that takes two numbers as parameters and 
// returns their sum.

/*

function AddSum(num1,num2)
{
    return num1+num2;
}

let a=Number(prompt('Enter the Number1: '));
let b=Number(prompt('Enter the Number2: '));
const result=AddSum(a,b);
console.log(`The summation is ${result}`)

*/

// 2.

// Write a function that takes a string as a parameter and 
// returns the string reversed.


/*

function reverseString(str)
{
    let revStr="";
    for(let i=str.length-1;i>=0;i--)
    {
        revStr+=str[i];
    }
    return revStr;
}

let s=prompt('Enter the string: ')
let revStr=reverseString(s);
console.log(`The reverse of the current string is ${revStr}`);

*/


// 3.

// Write a function that takes an array of numbers as a 
// parameter and returns the sum of all the numbers.

/*

function arraySum(arr)
{
    let sum=0;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    return sum;

}
let arr=[];
while(1)
{
    let d=Number(prompt('Enter the Number: '));
    arr.push(d);
    if(d===0)
    {
        break;
    }
}

let result=arraySum(arr);
console.log(result);

*/

// 4.

// Write a function that takes a number as a parameter and 
// determines whether it is prime or not. Return true if it is 
// prime, and false otherwise.

/*

function checkPrime(num)
{
    for(let i=2;i<num/2;i++)
    {
        if(num%i===0)
        {
            return false
        }
    }
    return true;
}


let num=Number(prompt('Enter the Number: '));
let result=checkPrime(num);
if(result===false)
{
    console.log(`${num} is not Prime.`)
}
else
{
    console.log(`${num} is Prime.`)
}

*/


// 5.

// Write a function that takes an array of numbers as a 
// parameter and returns the average of all the numbers.


/*

const calculateAverage=arr=>
{
    let sum=0;
    let l=arr.length;
    for(let i=0;i<arr.length;i++)
    {
        sum+=arr[i];
    }
    let avg=(sum/l);
    return avg;
}

let arr=[];
while(1)
{
    let d=Number(prompt('Enter the Number: '));
    arr.push(d);
    if(d===0)
    {
        break;
    }
}

let result=calculateAverage(arr);
console.log(result);

*/