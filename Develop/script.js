// Assignment Code
var generateBtn = document.querySelector("#generate");



// Random Generator Functions
// Random Lowercase
function getRandomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

// Random Uppercase
function getRandomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

// Random Numbers
function getRandomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

//Random Symbols
function getRandomSymbol() {
  const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(getRandomUpper());

// Prompt Password Length

let answer = prompt('Please select a length between 8 and 128');
let response;

if(answer.length === 0){
  response = 'You must enter a number between 8 and 128';
} else if(answer.length > 8){
  response = 'You must enter a number between 8 and 128';
} else if (answer.length < 128) {
  response = 'You must enter a number between 8 and 128';
}

alert(response);

let yesLower = confirm(`Would you like to include lower case letters?`)

function generatePassword(){
  console.log("Generating password...");
  
  var length = 10,
      charset = "ABCDEFGHIJKLMNOPQRSTUVWXY",
      retVal = "";
  return retVal;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
