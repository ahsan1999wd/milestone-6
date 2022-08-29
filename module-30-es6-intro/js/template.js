/*-----COMMON KEYS/ASCII CODE YOU SHOULD KNOW-----

\N   <-----New line (It takes the cursor to the next line) <---!!!

``   <-----Backtick   <-----!!!

${}  <-----Dynamic String   <-----!!!

''   <-----Single Quotes   <-----!!!

""   <-----Double Quotes   <-----!!!

/    <-----Forward slash   <-----!!!

\    <-----Backward slash   <-----!!!

;    <-----Semicolon   <-----!!!

-----------------------------------------------*/

/*---------- 3 way string ----------!!!*/

const person1 = 'Adam Sand';

const person2 = "Ben White";

const person3 = `Donald Trump`;

/*----------------------------------------------------*/

//     old way                 <----------!!!

const multiLine = 'First Line text \n' +
'second line of code \n' +
'Third line of text \n' + 
'Fourth line of string';
// console.log(multiLine);

/*----------------------------------------------------*/

//      new way                 <----------!!!

const newMultiLine = `First Line of text
Second LIner of text
third line of string
fourth line of code`;
// console.log(newMultiLine);

/*----------------------------------------------------*/

// old way                       <----------!!!

const a = 20;
const b = 30;
const summary = 'sum of: ' + a + ' and ' + b + ' is: '+ (a+b);
// console.log(summary);

/*-----------------------------------------------------*/

// new way                       <----------!!!

const a = 20;
const b = 30;
const newSummary = `sum of ${a} and ${b} is: ${a+b}`;
console.log(newSummary);

/*-----------------------------------------------------*/

// new way                       <----------!!!

const a = 20;
const b = 30;
const nums = [78, 98, 45, 12, 6, 444]
const newSummary = `sum of ${a} and ${nums.length} is: ${a+b}`;
console.log(newSummary);