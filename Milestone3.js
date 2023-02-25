/*
Operators
    Unary operator
    Bitwise operator
    Boolean operator
    Multiplicative operator
    Additive operator
    Relational operator
    Equality operator
    comma operators
*/

//Bitwise operators
let x=10;
let y=20;
console.log(x&y);  //And
console.log(x|y);  //Or
console.log(x^y);  //Xor
console.log(x<<y); //left shift
console.log(x>>y);  //right shift
console.log(x>>>y); //Unsigned right shift

//Boolean Operators
console.log(x<y); //Smaller than returs True
console.log(x>y); //Greater the returns False
console.log(x==y); //Isequal returns False

//Relational Operator
console.log(a&&b);
console.log(a||b);
let val1=~a;
console.log(val1);

//Equality Operator
let a=10;
let b="10";
console.log(a==b); //True (checks value)
console.log(a===b); //false (strict equal)
console.log(a!=b); //fale (checks value equality)
console.log(a!==b); //true (strict inequal)

//Comma operator and literals
let str1="Gurusudhan";
let str2="Loves Cricket";
console.log(str1,str2);
let num=17;
console.log(str1,num);
console.log(1,2,3,num);
console.log(`${str1} ${str2} and football and his fav num is ${num}`);




