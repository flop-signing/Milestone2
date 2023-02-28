// 1.

// Write a program that takes an array of numbers as input and 
// displays the largest and smallest numbers in the array

/*

function minMax(arr)
{
    let max=0;
    let min=9007199254740991;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>max)
        {
            max=arr[i];
        }
    }

    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]<min)
        {
            min=arr[i];
        }
    }
    return [min,max];
}
let arr=[];
while(1)
{
    let d=Number(prompt('Enter the Number: '));
    if(d===0)
    {
        break;
    }
    arr.push(d);
   
}

let result=minMax(arr);
console.log(`The min value is ${result[0]}`);
console.log(`The max value is ${result[1]}`);

*/

// 2.


// Write a program that takes an array of strings as input and 
// displays the longest and shortest strings in the array.

/*

function longestLength(arr)
{
    let l=0;
    for(let i=0;i<arr.length;i++)
    {
        let lngt=arr[i].length;
        if (lngt>l)
        {
            l=lngt;
        }
    }
    return l;
}

let arr=[]

while(1)
{
    let s=prompt('Enter the string');
    if(Number(s)===0)
    {
        break;
    }
    arr.push(s);
}

let ll=longestLength(arr);
console.log(arr);
console.log(ll);

*/

// 3.

// Write a program that takes an array of objects (each with a 
//     name and age property) as input and displays the name of 
//     the oldest person in the array.


/*

function oldestPerson(arr){
    let p=0;
    let name='';
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i].age>p)
        {
            p=arr[i].age;
            name=arr[i].name;
        }
    }
    return name;
}

let arr=[];
let n=Number(prompt('How many user?'));
let i=1;
while(i<=n)
{
    let name=prompt('Enter the name of the person: ');
    let age=Number(prompt('Enter the age of the person: '));
    arr.push({name,age});
    i++;
    
}

let result=oldestPerson(arr);
console.log(result)

*/


// 4.

// Write a program that takes an array of numbers as input and 
// returns a new array with all the even numbers.


/*

function retEvenNumber(arr)
{
    let evArr=[];
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]%2===0)
        {
            evArr.push(arr[i]);
        }
    }
    return evArr;
}

let arr=[];
while(1)
{
    let d=Number(prompt('Enter the Number: '));
    if(d===0)
    {
        break;
    }
    arr.push(d);
   
}

let evenNumber=retEvenNumber(arr);
console.log(evenNumber);

*/

// 5.

// Write a program that takes an array of strings as input and 
// returns a new array with all the strings in uppercase


/*

function strUpper(arr)
{
    for(let i=0;i<arr.length;i++)
    {
       arr[i]=arr[i].toUpperCase();
    }

    return arr;
}

let arr=[]

while(1)
{
    let s=prompt('Enter the string');
    if(Number(s)===0)
    {
        break;
    }
    arr.push(s);
}

let result=strUpper(arr);
console.log(strUpper(arr));

*/