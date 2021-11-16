//Welcome to the JS file of The Coolest Password Generator!

console.log('You can generate a password!');

// Compile possible data for passwords 

var symbol = ["!", "#", "$", "%", "&", ">", "?", "@", "[", "*", "]", "!", "/", "%", "&", "'", "(", ")", "+", ",", "-", ".", "^", "_", "`", "{", "|", "}", "~"];

var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

var abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

//Generate Password button

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  pw = generatePassword();
});

// Creates uppercase array

var makeUpper = function (x) {
  return x.toUpperCase();
};
var abc2 = abc.map(makeUpper);

// Password generator functions begin here

function generatePassword() {

  // User input variables

  var passwordLength;
  var pwSymbol;
  var pwNumeric;
  var pwUpperCase;
  var pwLowerCase;
  var passwordCharacterSet = [];

  passwordLength = parseInt(prompt("Please choose how many characters you'd like your password to be. You may choose any number between 8 and 128."));
  if (!passwordLength) {
    alert("Invalid selection. Please enter a number between 8 and 128.")
  
  } else if (passwordLength < 8 || passwordLength > 128) {
    alert("Invalid selection. Please enter a number between 8 and 128.");
    return;

  } else {
    pwSymbol = confirm("Special characters?");
    pwNumeric = confirm("Numbers?");
    pwUpperCase = confirm("Upper case letters?");
    pwLowerCase = confirm("Lower case letters?");
  };

  // User selections use the four prompts to generate concatenated characters below
  // Adds selectors

  if (pwSymbol) {
    passwordCharacterSet = passwordCharacterSet.concat(symbol);
  }

  if (pwUpperCase) {
    passwordCharacterSet = passwordCharacterSet.concat(abc2); 
  }

  if (pwLowerCase) {
    passwordCharacterSet = passwordCharacterSet.concat(abc);
  }

  if (pwNumeric) {
    passwordCharacterSet = passwordCharacterSet.concat(number);
  }

  // When no criteria are selected user receives error message
  
  if (passwordCharacterSet.length === 0) {
    alert("Invalid selection. Please select at least one option for your password.");
    passwordLength = 0;
  }
  // Create random selection for all variables
  var password = [];
  for (var i = 0; i < passwordLength; i++) {
    var randomCharacter = passwordCharacterSet[Math.floor(Math.random() * passwordCharacterSet.length)];
    password.push(randomCharacter);
  }

  // Puts characters into one string to place into password
  var pw = password.join("");
  writePassword(pw);
  return pw;
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(pw) {
  var passwordText = document.querySelector("#password");
  passwordText.value = pw;

}
//Copies new password to user's clipboard 
var copy = document.querySelector("#copy");
copy.addEventListener("click", function () {
  copyPassword();
})

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Your new password is copied! :-)");  
}