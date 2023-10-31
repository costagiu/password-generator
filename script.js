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

// Function to prompt user for password options
//Character types window.confirm
//* Lowercase
//* Uppercase
//* Numeric
//* Special characters ($@%&*, etc) 

// ask question of what the user want and return each options
function getPasswordOptions() { 
  var size = window.prompt ('how long should the password be?')
  var lowercase = window.confirm ("Do you want lowercase?")
  var uppercase = window.confirm ("Do you want uppercase?")
  var numericcase = window.confirm ("Do you want numericcase?")
  var specialcharacter = window.confirm ("Do you want specialcharacter?")
  return { lowercase, uppercase, numericcase, specialcharacter,size}
}

// Function for getting a random element from an array
function getRandom(arr) {
var position = Math.floor(Math.random() * arr.length)
return arr[position]

}

//At least 8 characters but no more than 128. window.confirm
// Function to generate password with user input
function generatePassword() {
  var options = getPasswordOptions ()
  // options.size
  var chars = [];
  if (options.lowercase)
  
  chars = chars.concat ( lowerCasedCharacters)

  if (options.uppercase)
  chars = chars.concat ( upperCasedCharacters)

  if (options.numericcase)
  chars = chars.concat (numericCharacters)

  if (options.specialcharacter)
  chars = chars.concat ( specialCharacters)

  var string = ""

  for ( var i = 0; i < options.size; i++ ){
    string = string + getRandom (chars)

}
return string
}

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

