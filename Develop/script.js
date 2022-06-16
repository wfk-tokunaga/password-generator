var lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
var uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericChars = '1234567890';
var specialChars = `!"#$%&'()*+,-./:;<=>?@[\]\\^_{|}~\``;

const promptYN = (type) => {
  var returnVal = window.prompt(`Include ${type} characters? Please enter "yes" or "no"`);
  returnVal = returnVal.toLowerCase();
  while(returnVal !== "yes" && returnVal !== "no") {
    returnVal = window.prompt(`Include ${type} characters? MUST enter "yes" or "no"`).toLowerCase();
  }

  switch (returnVal) {
    case "no":
      return 0;
    case "yes":
      return 1;
  }
}

const promptTypes = () => {
  return {
    lowercase: promptYN("lowercase"),
    uppercase: promptYN("uppercase"),
    numeric: promptYN("numeric"),
    special: promptYN("special"),
  }
}

// Assignment code here
function generatePassword() {
  length = window.prompt("What is the length of the password? Must be at least 8 characters and no more than 128 characters");
  length = parseInt(length);
 
  while (isNaN(length) || length < 8 || length > 128) {
    length = window.prompt("Please enter a number between 8 and 128!");
  }

  var types = promptTypes();
  while(!types.lowercase && !types.uppercase && !types.numeric && !types.special) {
    alert("Must pick at least one type of character to include!")
    types = promptTypes();
  }

  const {lowercase, uppercase, numeric, special} = types;

  var password = "";
  while (password.length < length) {
    let charType = Math.round(Math.random() * 4 + 1);
    switch (charType) {
      case 1:
        if (lowercase) {
          password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        }
        break;
      case 2:
        if (uppercase) {
          password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        }
        break;
      case 3:
        if (numeric) {
          password += numericChars.charAt(Math.floor(Math.random() * numericChars.length));
        }
        break;
      case 4:
        if (special) {
          password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
        }
        break;
      }
  }

  return password;
}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
