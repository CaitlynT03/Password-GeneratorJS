
// Get references to the #generate element
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var special = "!@#$%^&*(),./<>?`~-_";
var numbers = "1234567890"

function generatePassword() {
  var password = "";
  var possiblePassword = "";
  var passwordLength = prompt ("How many characters in the password?", "8-12");
    if (passwordLength < 8) {
      alert ("Password length must be between 8-12 characters");
      return null;
    }
    if (passwordLength > 12) {
      alert ("Password length must be between 8-12 characters");
      return null;
    }
    if (isNaN(passwordLength)) {
      alert ("password length must be a number");
      return null;
    }


  var uppercaseChar = confirm ("Would you like uppercase letters?");
    if (uppercaseChar) {
      possiblePassword += uppercase;
    }
    console.log(possiblePassword);

  var lowercaseChar = confirm ("Would you like lowercase letters?");
    if (lowercaseChar) {
      possiblePassword += lowercase;
    }
    console.log(possiblePassword);

    var specialChar = confirm ("Would you like special characters?");
    if (specialChar) {
      possiblePassword += special;
    }
    console.log(possiblePassword);

  var numbersChar = confirm ("Would you like numbers?");
    if (numbersChar) {
      possiblePassword += numbers;
    }
    console.log(possiblePassword);

  for (var i=0; i< passwordLength; i++) {
    password += possiblePassword.charAt(Math.floor(Math.random() * possiblePassword.length));
  }

  console.log(password);
    return password;

}
console.log(password)
console.log(password)

var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

