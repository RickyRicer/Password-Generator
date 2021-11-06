// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  // Prompt Password Length
  let password = '';
  let passwordChar = '';
  
  let answerLength = prompt('Please select a character length between 8 and 128');
  answerLength = parseInt(answerLength);
  
  if (answerLength < 8) {
    alert = ('You must have more than 7 character!');
  } else if (answerLength > 128) {
    response = 'You must not have more than 128 characters!';
    };
    console.log(answerLength);
  
  // Password Selectors
  
  let lower = confirm('Would you like to include lowercase letters?');
  if (lower) {
    passwordChar += lower;
  };
  
  let upper = confirm('Would you like to include uppercase letters?');
  if (upper) {
    passwordChar += upper;
  }
  
  let number = confirm('Would you like to include numbers?')
  if (number){
    passwordChar += number;
  }
  
  let symbol = confirm('Would you like to include symbols?')
  if (symbol){
    passwordChar += symbol;
  }
  for (let i = 0; i < answerLength; i++) {
    password = passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }
  console.log(password);
  
  // const typesCount = lower + upper + number + symbol;
  
  // const typesArr = [{ lower }, { upper }, { number }, { symbol },].filter (
  //   item => Object.values(item)[0]
  //   );
    
  //   if(typesCount === 0) {
  //     return '';
  //   }
    
  //   for(let i = 0; i < length; i += typesCount) {
  //     typesArr.forEach(type =>{
  //       const funcName = Object.keys(type)[0];
        
  //       generatePassword += randomFunc[funcName]();
  //     });
  //   }

  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("password");
    
    generatePassword.value = password;
    
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);



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

