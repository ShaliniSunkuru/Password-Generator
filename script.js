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
function getPasswordOptions() {
  var charType = [{
    charName: "special characters",
    charArr: specialCharacters,
    is_char_option: false
  },
  {
    charName: "numeric characters",
    charArr: numericCharacters,
    is_char_option: false
  },
  {
    charName: "lower case characters",
    charArr: lowerCasedCharacters,
    is_char_option: false
  },
  {
    charName: "upper case characters",
    charArr: upperCasedCharacters,
    is_char_option: false
  }
]

//Prompts for password character types to include
for (let i = 0; i < charType.length; i++){
  charType[i].is_char_option = confirm("Would you like " + charType[i].charName + " in your password?");
}


}

// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  //prompt for length of password
  var passwordLength = prompt("Enter the length of the password(between 8 and 128)");
  while (passwordLength < 8 || passwordLength > 128){
    passwordLength = prompt("Please enter length between 8 and 128");
  }
  var passwordOptions = getPasswordOptions();
  for(let i = 0; i < passwordLength; i++){
    
  }

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