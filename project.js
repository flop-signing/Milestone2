

function miniCalculator(a,b,c)
{
    let result=0;
    let divError='Not Valid input';
    let inpError='Not Numeric Number';
    if(Number.isNaN(a)===false && Number.isNaN(b)===false)
    {
        if(c==='+')
        {
            result = a+b;
            window.alert(`The result is ${result}`);
        }
        else if (c==='-')
        {
            result = a-b;
            window.alert(`The result is ${result}`);
        }
        else if(c==='/')
        {
            if(b===0)
            {
               window.alert(`Divide By Zero is Not Vald.Try Again!!`)
            }
            else 
            {
                result = a/b;
                window.alert(`The result is ${result}`);
            }
        }
        else if(c==='*')
        {
            result = a*b;
            window.alert(`The result is ${result}`);
        }

    }
    else{
        window.alert(`The Given inputs are ${inpError}.Try again!!!`);
    }

}







let num1=Number(prompt('Enter the First Number: '));
let num2=Number(prompt('Enter the Second Number'));
let char=prompt('Enter the Operatioin (+,-,*,/): ')

miniCalculator(num1,num2,char);
