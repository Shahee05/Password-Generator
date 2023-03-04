// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

//requirements for the password

// Generate a password when the button is clicked
// Present a series of prompts for password criteria

// Code should validate for each input and at least one character type should be selected
// Once prompts are answered then the password should be generated and displayed

// Prompts required;
// 1) How many characters would you like your password to contain?
// Between 8 - 128
// 2) Would you like to include lowercase characters?
// 3) Would you like to include uppercase characters?
// 4) Would you like to include numeric characters?
// 5) Would you like to include special characters?


// Function to prompt user for password options

let passwordLength
  keyArray = [];
function getPasswordOptions() {
}
 

//input intergers to continue to run thorugh the series of prompts
  passwordLength = parseInt(prompt("How many characters would you like your password to contain (Choose between 8 - 128)?"));

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Password length needs to be between 8 - 128 characters. Please start again."); 
  } 
  
   else if (passwordLength => 8 && passwordLength <= 128 )  {

  var lowerCase = confirm("Would you like to include lowercase characters? Press OK");
  if (lowerCase===true) {
    keyArray = keyArray.concat(lowerCasedCharacters);
  };
    
  var upperCase = (confirm("Would you like to include uppercase characters? Press OK"));
  if (upperCase === true) 
    keyArray = keyArray.concat(upperCasedCharacters);
  

  var numericValue = (confirm("Would you like to include numeric characters? Press OK")); 
      if (numericValue === true) 
      keyArray =keyArray.concat(numericCharacters);
    
  var specialValue = (confirm("Would you like to include special characters? Press OK")); 
      if (specialValue === true)
      keyArray =keyArray.concat(specialCharacters);

};
  
if (!specialValue && !upperCase && !numericValue && !lowerCase)
  alert("Must fit the criteria or choose at least one character type!")

 
  

// Function for getting a random element from an array

function getRandomItem(arr) {
var password = "";
for (var i = 0; i < passwordLength; i++) {
  const randomCharacter = Math.floor(Math.random() * keyArray.length);
  password = password + keyArray[randomCharacter];
} return password;

}

const result = getRandomItem(password);
console.log(result);

// assistance from stack overflow (used code and adapted to it - i.e. tested it out and then changed code)
  // get random item
  // const item = arr[randomIndex];
// const array = [1, 'hello', 5, 8];

// const result = getRandomItem(array);
// console.log(result);

// Function to generate password with user input
function generatePassword() {

  return result;
}



// Functionality of the page

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);