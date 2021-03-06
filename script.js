// Assignment Code
var generateBtn = document.querySelector("#generate");

// Password characters
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '1234567890';
const symbols = '!"#$%&()*+,-./:;<=>?@[\]^_{|}~';

//Password Generator
function generatePassword() {
  // Prompt Password Length
  let password = '';
  let passwordChar = '';

  let answerLength = prompt('Please select a character length between 8 and 128');
  answerLength = parseInt(answerLength);
  
  if (Number.isNaN(answerLength)) {
    alert('You must use a number between 8 and 128, please try again!');
    return 'Password not generated, please try again!';
  };
  if (answerLength < 8) {
    alert('You must have 8 or more characters!');
    return 'Password not generated, please try again!';
  } else if (answerLength > 128) {
    alert('You must have 128 characters or less!');
    return 'Password not generated, please try again!';
  };

  // Password Selectors

  let lower = confirm('Would you like to include lowercase letters?');
  if (lower) {
    passwordChar += lowercase;
  };

  let upper = confirm('Would you like to include uppercase letters?');
  if (upper) {
    passwordChar += uppercase;
  }

  let number = confirm('Would you like to include numbers?')
  if (number) {
    passwordChar += numbers;
  }

  let symbol = confirm('Would you like to include symbols?')
  if (symbol) {
    passwordChar += symbols;
  }

  for (let i = 0; i < answerLength; i++) {
    password += passwordChar[Math.floor(Math.random() * passwordChar.length)]
  }

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.innerHTML = ("password", password);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



