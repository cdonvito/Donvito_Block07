/** Pseudocode
 * 1. Create a string for the user saying "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ".
 * 2. Assign a variable for the first number in the combination (10) using addition.
 * 3. Assign a variable for the second number in the combination (40) using multiplication.
 * 4. Assign a variable for the third number in the combination (39) using subtraction.
 * 5. Create a popup box display all 3 combination numbers
 */

const userMessage = 'You have received this message because you have been chosen to open an important vault. Here is the secret combination: ';

//Assigning values to the 3 combination variables. 1st using additon. 2nd using multiplication. 3rd using subtraction.
let firstComb = 4 + 6;
let secondComb = 4 * 10;
let thirdComb = 40 - 1;

//Outputting to console to confirm correct variable assignment values
console.log('Lock Combination: ' + firstComb + ' - ' + secondComb + ' - ' + thirdComb);

//Popup alert showing the user the alert message.
alert(userMessage + '\n' + firstComb + ' - ' + secondComb + ' - ' + thirdComb);