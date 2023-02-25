/*
Milestone 4
    Control Statements 
    Looping statements
    Conditional statements
*/

let myName="Gurusudhan";
//If Conditiona; Statement
if (myName=="Calibraint")
{
    console.log(myName);
}
//Else if Conditional Statement
else if(myName=="Gurusudhan"){
    console.log("Hi this is",myName);  //Hi this is Gurusudhan (output)
}
else{
    console.log("Nothing to show");
}


//Grade System Using if ,else and else if

let mark=85;
if (mark>90 && 100>=mark){
    console.log("A grade");
}
else if (mark>80 && 90>=mark){
    console.log("B grade");
}
else if (mark>70 && 80>=mark){
    console.log("c grade");
}
else if (mark>=45 && 70>=mark){
    console.log("E grade");
}
else if (mark>=0 && 45>=mark){
    console.log("E grade");
}
else{
    console.log("Invalid mark entered");
}

//Loops

//Program to print first 10 numbers using for
let i=1
for (;i<=10;i++)
{
    console.log(i); 
}
console.log(i); //But the value of i is 11 here as incremented at last

//Sum of first 10 numbers using for loop
let a=0;
let count=0;
for (a=0;a<=10;a++)
{
    count += a;  //Add the value in each loop 
}
console.log(count);

//console.log(a); // just checkin a value here

//Using while loop
a=0;  //making a=0 again
count=0;
while(a<10)
{
    count += 1;
    a++;  //Incereament
}
console.log(count);

//first 10 Even Number
let arr=[];
a=0;
for (a=0;a<20;a+=2)
{
    arr.push(a) //it adds every number to the array
}
console.log(arr);

/*
For odd number value can start from 1
can be done using while
just a for loop and a if condition also can be done
 */

//loop through array
arr=[1,2,3,4,"Guru",6,"Sudhan",8,9,10]
console.log(a); //A is 22 here
a=0
while(a<arr.length)
{
    console.log(arr[a]); //Prints every value in arr
    a++;
}

//For in loop (index looping)
for (x in arr){
    console.log(x);
}
//For of loop (Value in loop)
for (y of arr)
{
    console.log(y);
}

/*Do while same like while
first it runs scope and checks the condition
syntax
        do{

        }while()
*/

//Switch Case
//Mark system using switch case

mark = 178;
switch (true) {
  case mark >= 90 && 100 >= mark:
    console.log("A grade");
    break;
  case mark >= 80 && 90 > mark:
    console.log("B grade");
    break;
  case mark >= 50 && 80 > mark:
    console.log("Pass"); // This will be the output
    break;
  case mark >= 0 && mark <= 45:
    console.log("Failed");
    break;
  default:
    console.log("Invalid Mark");
}
