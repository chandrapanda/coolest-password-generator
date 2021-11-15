// Create possible data for passwords 

character = "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", " ^ ", "_", "`", "{", "|", "}", "~"];

abc = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

space = [ ];

number = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];

// User input variables

var enter;
var pwNumeric;
var pwCharacter;
var pwUpperCase;
var pwLowerCase;
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
// User is prompted about preferred characters

function generatePassword() {
  enter = parseInt(prompt("Please choose how many characters you'd like your password to be. You may choose any number between 8 and 128."));
  if (!enter) {
    alert("Please enter a number between 8 and 128.")
  
  } else if (enter < 8 || enter > 128) {
    enter = parseInt(prompt("Please enter a number between 8 and 128."));
  
  } else {
    pwNumeric = confirm("Numbers?");
    pwCharacter = confirm("Special characters?");
    pwUpperCase = confirm("Upper case letters?");
    pwLowerCase = confirm("Lower case letters?");
  };

  // User selections use the four prompts to generate concatenated characters below

  // When no criteria are selected user receives error message
  
  if (!pwCharacter && !pwNumeric && !pwUpperCase && pwLowerCase) {
    choice = alert("Please select desired characters for your password.");
  }

  // All criteria are selected
  
  else if (pwCharacter && pwNumeric && pwUpperCase && pwLowerCase) {
    choice = character.concat(number, abc, abc2);
  }

  // Some criteria are selected

  else if (pwCharacter && pwNumeric && pwUpperCase) {
    choice = character.concat(number, abc2);
  }

  else if (pwCharacter && pwLowerCase && pwNumeric) {
    choice = character.concat(abc, number);
  }

  else if (pwCharacter && pwLowerCase && pwUpperCase) {
    choice = character.concat(abc, abc2);
  }

  else if (pwLowerCase && pwUpperCase && pwNumeric) {
    choice = abc.concat(abc2, number);
  }

  
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