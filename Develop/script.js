// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  // Prompt for the criteria of user
  var passwordLength = prompt("Enter the length of the password between 8 and 128 characters.");
  passwordLength = parseInt(passwordLength);

  // Make sure the password length is correct
  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    alert('Please enter a valid password length between 8 and 128 characters.');
    return;
  }
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
