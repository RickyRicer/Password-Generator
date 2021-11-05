// Assignment Code
var generateBtn = document.querySelector("#generate");



// Prompt Password Length

let answer = prompt('Please select a character length between 8 and 128');
let response;

if(answer.length === 0){
  response = 'You must enter a number between 8 and 128';
} else if(answer.length < 8){
  response = 'You must enter a number between 8 and 128';
} else if (answer.length > 128) {
  response = 'You must enter a number between 8 and 128';
}

alert(response);


// Password Selectors

let lower = confirm(`Would you like to include lowercase letters?`)
let upper = confirm('Would you like to include uppercase letters?')
let number = confirm('Would you like to include numbers?')
let symbol = confirm('Would you like to include symbols?')

function generatePassword(lower, upper, number, symbol, length) {
  let generatedPassword = '';
  
  const typesCount = lower + upper + number + symbol;
  
  console.log('typesCount: ', typesCount);
  
  const typesArr = [{ lower }, { upper }, { number }, { symbol },].filter (
    item => Object.values(item)[0]
    );
    
    console.log('typesArr: ', typesArr);
    if(typesCount === 0) {
      return '';
    }
    
    for(let i = 0; i < length; i += typesCount) {
      typesArr.forEach(type =>{
        const funcName = Object.keys(type)[0];
        
        generatedPassword += randomFunc[funcName]();
      });
    }
    
    const yourPassword = generatedPassword
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    
    passwordText.value = password;
    
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);
  
  /*var length = 10,
  charset = "ABCDEFGHIJKLMNOPQRSTUVWXY",
  retVal = "";
  return retVal;
*/

// Random Generator Functions

const randomFunc = {
  lower: randomLower,
  upper: randomUpper,
  number: randomNumber,
  symbols: randomSymbol,
}

// Random Lowercase
function randomLower() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 97);
}

// Random Uppercase
function randomUpper() {
  return String.fromCharCode(Math.floor(Math.random() *26) + 65);
}

// Random Numbers
function randomNumber() {
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

//Random Symbols
function randomSymbol() {
  const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';
  return symbols[Math.floor(Math.random() * symbols.length)];
}

console.log(randomUpper());