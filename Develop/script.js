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
  // Ask about extra criteria for password
  var includeLowercase = confirm("Include lowercase Characters?");
  var includeUppercase = confirm('Include uppercase characters?');
  var includeNumeric = confirm('Include numeric characters?');
  var includeSpecialChars = confirm('Include special characters?');
  // Confirm that at least one criteria is selected
  if (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialChars) {
    alert('Please select at least one criteria');
    return;
  }
  //Added the characters to the criteria
  var lowercaseChars = 'abcdefghijklmnopqrstuvwyz';
  var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var numbericChars = '0123456789';
  var specialChars = '!@#$%^&*()_+{}[];:,.<>?~';
  // Add the characters to the criteria questions
  var allChars = '';
  if (includeLowercase) allChars += lowercaseChars;
  if (includeUppercase) allChars += uppercaseChars;
  if (includeNumeric) allChars += numbericChars;
  if (includeSpecialChars) allChars += specialChars;
  //Finally generate the password
  var generatedPassword = '';
  for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * allChars.length);
    generatePassword += allChars.charAt(randomIndex);
  }
  return generatedPassword;
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Show the password
