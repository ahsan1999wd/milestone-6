// interview question: differences between

// function declaration, function expression and arrow function

/*---------------------------------------------------*/

/*            => arrow function        <---------- new !!!    */

const add6 = (first, second) => first + second;
const result = add6(10, 20);
console.log(result);

/*---------------------------------------------------*/

const add = (first, second) => first + second;

const getFullName = (first, last) => first + ' ' + last;

/*----------------------------------------------------*/

const multiply = (a, b) => a * b;

const result = multiply(7, 8);

// console.log(result);

const addAll = (a, b, c, d, e,) => a + b + c + d + e;

/*------------------------------------------------------*/

// no parameter arrow function   <----------!!!

const getPie = () => 3.14;

/*------------------------------------------------------*/

// one parameter   <----------!!!

const doubleIt = (num) => num * 2;

// one parameter simple version no ()   <----------!!!

const fiveTimes = num => num * 5;

/*------------------------------------------------------*/

// multi line arrow function   <----------!!!

// if you want to return something, use the return   <-----!!! 

const doMath = (x, y, z) => {
  const firstSum = x + y;
  const secondSum = y + z;
  const multiplyResult = firstSum * secondSum;
  const result = multiplyResult / 2;
  return result;
}