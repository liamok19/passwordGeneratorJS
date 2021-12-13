// Assignment Code
var generateBtn = document.querySelector("#generate");

//seperate variable strings. 
var numbers = ["0","1","2","3","4","5","6","7","8","9"];
var specialSybmbols = ["!", "@", "#", "$", "%", "^", "&", "*", ")", "("];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//empty array below 
var chosenPassword = [];

function generatePassword () {

var passwordLength = window.prompt ("Let's begin with you choosen a length for your password it must be between 8-128 characters long");


if (isNaN(passwordLength)) {
  window.alert ("Please chose a number!");
  return generatePassword();
}

if (passwordLength < 8 || passwordLength > 128) {
  window.alert ("The number must be between 8 - 128!");
  return generatePassword();
}

var requestNumbers = window.confirm ("Click 'Ok' to include Numbers, otherwise hit Cancel !");
var requestSymbols = window.confirm ("Click 'Ok' to include Symbols, otherwise hit Cancel !");
var requestLowercase = window.confirm ("Click 'Ok' to include Lowercase, otherwise hit Cancel !");
var requestUppercase = window.confirm ("Click 'Ok' to include Uppercase, otherwise hit Cancel !");

if (!requestNumbers && !requestSymbols && !requestLowercase && !requestUppercase) {
  window.alert ("In the following windows, please select a character for each !");
  return generatePassword();
}

if (requestNumbers = true){
  chosenPassword.push(...numbers);
} else (requestNumbers = false){
  chosenPassword.pop (...numbers);
}

if (requestSymbols = true){
  chosenPassword.push(...specialSybmbols);
}

if (requestLowercase = true){
  chosenPassword.push(...lowerCaseLetters);
}

if (requestUppercase = true){
  chosenPassword.push(...upperCaseLetters);
}

var result = "";

for (i = 0; i<passwordLength; i++){
  var index = Math.floor(Math.random() * chosenPassword.length);
  result += chosenPassword[index];
}

return result;}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//keep this in for the moment. But comment out
document.getElementById("password").value = password;



// var yesUppercase = "Y";
// var noUppercase = "N";

// if (userChoice === yesUppercase){
//   window.alert("You chose YAS to Uppercase, type Y for yes or N for no. Click ok for the next step. ");
// } 
// else (userChoice === noUppercase); {
//   window.alert("You chose no to Uppercase. Click ok for the next step ");

