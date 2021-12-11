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


var specialSybmbols = ["!", "@", "#", "$", "%", "^", "&", "*", ")", "("];

console.log(specialSybmbols);

var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];

console.log(lowercaseLetters);

var numbers = 12345678910;

console.log(numbers);

var userChoice = window.prompt("Your Password must be between 8-128 characters long. Would you like to include Upper Case, type #Y for yes or N for no");
