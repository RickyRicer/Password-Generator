// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generator functions

function getRanmdomLowercase() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

console.log(getRandomLower());

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
