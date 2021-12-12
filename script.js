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

var numbers = ["0","1","2","3","4","5","6","7","8","9","10"];
var specialSybmbols = ["!", "@", "#", "$", "%", "^", "&", "*", ")", "("];
var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];
var upperCaseLetters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var password = "";

if (password.length < 8 || password.length > 128) {
  window.alert ("Your value must be between 8 - 128");
  return generatePassword();
}


var userChoice = window.prompt("Your Password must be between 8-128 characters long. Would you like to include Upper Case, type Y for yes or N for no");

//ending function add cancel
// if (!userChoice) {
//   return;
// }

var yesUppercase = "Y";
var noUppercase = "N";

if (userChoice === yesUppercase){
  window.alert("You chose YAS to Uppercase, type Y for yes or N for no. Click ok for the next step. ");
} 
else (userChoice === noUppercase); {
  window.alert("You chose no to Uppercase. Click ok for the next step ");
}

var userChoice = window.prompt("Would you like numbers");
if (userChoice === yesUppercase){
  window.alert("You chose YAS to numbers. Click ok for the next step");
} else (userChoice === noUppercase); {
  window.alert("You chose no to numbers. Click ok for the next step ");
}

var userChoice = window.prompt("Would you like symbols, type Y for yes or N for no.");
if (userChoice === yesUppercase){
  window.alert("You chose YAS to symbols. Click ok for the next step");
} else (userChoice === noUppercase); {
  window.alert("You chose no to symbols. Click ok for the next step ");
}


for (var i = 0; i <=passwordLength; i++){
  var numberRandom = Math.floor(Math.random() * charsFullString.length);
  password += charsFullString.substring(numberRandom, numberRandom +1);

}

document.getElementById("password").value = password;



// the below is commented out. I started with this process. I would like to know whether I can still use this in the future?
// var specialSybmbols = ["!", "@", "#", "$", "%", "^", "&", "*", ")", "("];
// console.log(specialSybmbols);
// var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k", "l", "m", "n", "o", "p", "q", "r","s","t","u","v","w","x","y","z"];
// console.log(lowercaseLetters);
// var numbers = 12345678910;
// console.log(numbers);

// var charsFullString = "12345678910abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var charsNoUppercase = "12345678910abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
// var charsNoUppercaseYesNumber = "12345678910abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
// var charsNoUppercaseNoNumber = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()";
// var charsYesUppercaseNoNumber = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var charsYesUppercaseNoNumberYesSymbol = "abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var charsYesUppercaseNoNumberNoSymbol = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

// var userChoice = window.prompt("Your Password must be between 8-128 characters long. Would you like to include Upper Case, type Y for yes or N for no");

// var passwordLength = "";
//   for ( let i = 0; i < lowercaseLetters[0].length; i++);

//   console.log (passwordLength);

