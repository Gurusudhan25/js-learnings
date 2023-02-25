/*
Milestone-5
    Functions
    Over loading in js
    Parameters and arguments

    some DOM things

*/
//A basic add function in javascript
function Add(a,b)
{
    return (a+b);
}
console.log(Add(10,20));  //30 is output

//Function to add the array elements

function SumofarryElements(arr)
{
    let i=0;
    let count=0;
    for (;i<arr.length;i++)
    {
        count += arr[i];
    }
    return count;
}
console.log(SumofarryElements([2,4,1,5,6,8]));  //Sum of thses numbers will be printed

//Function to check Palindrome
function palinCheck(str){
    let i=0;
    let n=str.length;
    let x=0;
    for (;i<n/2;i++)
    {
        if (str[i]==str[n-1-i])
        {
            x=1;
        }
        else{
            return ("Not a palindrome");
        }
    }
    if (x==1)
    {
        return ("Palindrome");
    }
}
console.log(palinCheck("malayalam"));

//Function that alerts will only run with html
// function alerts()
// {
//     alert("Hello greet");
// }
// alerts();

//Arguments
function expenseTracker()
{
    let count=0;
    for (x of arguments)
    {
        count += x;
    }
    return count;
}
console.log(expenseTracker(100,89,35,187,376)); //summ of these numbers will be printed

//Parameters
function addTo(x=100,y=200)
{
    return x+y;
}
console.log(addTo(28,78)); //output is 106
console.log(addTo(28));    //output is 228
console.log(addTo());       //output is 300

//Map function
let Person =[ 
    {id:1,firstName:"Guru",lastName:"Sudhan"},
    {id:2,firstName:"Hari",lastName:"Haran"},
    {id:3,firstName:"Sabari",lastName:"Rana"},    
]
let fullName = Person.map((i) =>[i.firstName , i.lastName].join(" "))  //join method
console.log(fullName);   //Output fullname (firstname lastname)

//example 2
let arr=[1,2,3,4,5];
let double = arr.map((i) => i*2)
console.log(double);   //[2,4,6,8,10]

//Recursive Factorial
function factorial(num) {
  if (num == 1) {
    return 1; //condition for recursive break to return
  } else {
    return num * Factorial(num - 1); //recursive call of the function
  }
}
console.log(factorial(5));
