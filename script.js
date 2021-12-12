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

//seperate variable strings. 
var numbers = ["0","1","2","3","4","5","6","7","8","9","10"];
var specialSybmbols = ["!", "@", "#", "$", "%", "^", "&", "*", ")", "("];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//empty array below 
var chosenPassword = [];

function generatePassword () 


var passowordLength = window.prompt ("Let's begin with you choosen a length for your password it must be between 8-128 characters long." );

if (Number.isNaN(passowordLength)){
  window.alert ("Please chose a number");
  return generatePassword();
}

if (password.length < 8 || password.length > 128) {
  window.alert ("The number must be between 8 - 128");
  return generatePassword();
}

var requestNumbers = window.prompt ("Click 'Ok' to include Numbers, otherwise hit Cancel")
var requestSymbols = window.prompt ("Click 'Ok' to include Symbols, otherwise hit Cancel")
var requestLowercase = window.prompt ("Click 'Ok' to include Lowercase, otherwise hit Cancel")
var requestUppercase = window.prompt ("Click 'Ok' to include Uppercase, otherwise hit Cancel")

if (requestNumbers = true){
  chosenPassword.push
}

for (var i = 0; i <=passwordLength; i++){
  var numberRandom = Math.floor(Math.random() * charsFullString.length);
  password += charsFullString.substring(numberRandom, numberRandom +1);

}

document.getElementById("password").value = password;

// var yesUppercase = "Y";
// var noUppercase = "N";

// if (userChoice === yesUppercase){
//   window.alert("You chose YAS to Uppercase, type Y for yes or N for no. Click ok for the next step. ");
// } 
// else (userChoice === noUppercase); {
//   window.alert("You chose no to Uppercase. Click ok for the next step ");
// }
