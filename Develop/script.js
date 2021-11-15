// Create possible data for passwords 

character = "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", " ^ ", "_", "`", "{", "|", "}", "~"];

abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [ ];

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// User input variables

var enter;
var pwNumber;
var pwCharacter;
var pwUpperCase;
var pwLowerCase;
var pwNumeric;
var choice;

// Capitalizes letters

var makeUpper = function (x) {
  return x.toUpperCase();
};
abc2 = abc.map(makeUpper);

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
  ps = generatePassword();
  document.getElementById("password").placeholder = ps;
})

// Password generator functions begin here

function generatePassword() {

  var password = "";
  console.log('generate a password.');

  // Loop to repeat, selecting random character and appending it to string loop until our string reaches the chosen length.

  password += "a";

  password += "r";

  password += "5";

  password += "]";

  return password;

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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