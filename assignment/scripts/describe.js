// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')
let test = 'gittest';

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// // We make a variable called name and set it to a value of Dane as a string.
// Then we make an if else condtional statement. Stating that if the string variable is equal to Mary,
// we console log 'Hi Mary!. If the name is not Mary, we console log 'How do you do?'. 
// We console.log 'How do you do?'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// // Variable is called secret. A conditional is created inside that variable to set what prints to the console.
// Variable code is set to number 123. If code is equal to 123 we give a value of 'super' to the variable secret.
// 
// We console.log 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// //We create a variable call isStudent and set it to the Boolean value of true. We create a variable called
// age with the value of 34 as a number and a variable called zip with the value of 55407 as a number. Using 
// compound conditionals we make if else statements. The compound conditional on the first line checks if two things 
// are true. The second line uses double pipes which means or and that we only care if one of the conditionals is true
// The third line only cares about the first variable being true. The 4th line would print if none of the above were true. 
// We console.log 'Welcome to Prime'. 

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/* FIX color One should be 'blue' and colorTwo should be 'red'
let colorOne = 'blue';
let colorTwo = 'red';
let mix = true;

FIX only colorOne was set to purple
if (mix === true) {
  colorOne = 'purple';
  colorTwo = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

//FIX time should not be const
/* 
let temp = 40;
let time = 4;

//FIX should use the and operator, not the or
if (temp > 39 && time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

//FIX Incorrect comparison operation. Was showing less than or equal too. Also have to reverse minAge & age.
//FIX 'enter' and 'no entry' need to be reversed.
if(age >= minAge) {
  console.log('enter');
} else {
  console.log('no entry');
}
*/

