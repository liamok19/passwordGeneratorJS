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

//user is prompt with the below message to build PW. A number between 8-128 MUST be put in. Variable declaration assigned to name passwordLength. 
var passwordLength = window.prompt ("Let's begin with you choosen a length for your password it must be between 8-128 characters long");

//if no number (isNan) is returned then window.alert will be passed back. 
if (isNaN(passwordLength)) {
  window.alert ("Please choose a number");
  return generatePassword();
}

//if the user types a 'number'< 8 or 'number' > 128 then the below message will be sent back. 
if (passwordLength < 8 || passwordLength > 128) {
  window.alert ("The number must be between 8 - 128!");
  return generatePassword();
}

// window.confirm assigned for each variable we want the user to apply to the PW
var requestNumbers = window.confirm ("Click 'Ok' to include Numbers, otherwise hit Cancel");
var requestSymbols = window.confirm ("Click 'Ok' to include Symbols, otherwise hit Cancel");
var requestLowercase = window.confirm ("Click 'Ok' to include Lowercase, otherwise hit Cancel");
var requestUppercase = window.confirm ("Click 'Ok' to include Uppercase, otherwise hit Cancel");

//The user will be alerted for each category to choose if they want it in their PW or not. 
if (!requestNumbers && !requestSymbols && !requestLowercase && !requestUppercase) {
  window.alert ("In the following windows, please select a character for each !");
  return generatePassword();
}

//when the user chooses the ok option for their PW the if statement will verify the boolean factor True will run Array.push(). Else isn't required, if the statment is false it won't run the push factor. 
// spread operator. Seperating the the numbers into individual components. 
if (requestNumbers === true){
  chosenPassword.push(...numbers);
} 
//when the user chooses the ok option for their PW the if statement will verify the boolean factor True will run Array.push(). Else isn't required, if the statment is false it won't run the push factor. 
// spread operator. Seperating the symbols into individual components. 

if (requestSymbols === true){
  chosenPassword.push(...specialSybmbols);
} 
//when the user chooses the ok option for their PW the if statement will verify the boolean factor True will run Array.push(). Else isn't required, if the statment is false it won't run the push factor. 
// spread operator. Seperating the the lowerCaseLetters into individual components. 

if (requestLowercase === true){
  chosenPassword.push(...lowerCaseLetters);
}
//when the user chooses the ok option for their PW the if statement will verify the boolean factor True will run Array.push(). Else isn't required, if the statment is false it won't run the push factor. 
// spread operator. Seperating the the upperCaseLetters into individual components. 
if (requestUppercase === true ){
  chosenPassword.push(...upperCaseLetters);
}

//result has an empty string to begin with so we can run the below 'For' statement. 
var result = "";

//for loop to run the expression for each variable. Math.random is utilised to facilitate the build of PW. result = result + index. 
for (i = 0; i<passwordLength; i++){
  var index = Math.floor(Math.random() * chosenPassword.length);
  result += chosenPassword[index];
}

//result is return to the used in the generated PW below. 
return result;}


//the below function/generateBTN and getElementbyID was built by the USYD team to begin with. Creditation goes to them. 
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





