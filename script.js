// Assignment Code
var generateBtn = document.querySelector("#generate");
 
// Write password to the #password input
function writePassword() {
  //prompt user for paramaters
  var length = prompt("How long do you want your password to be? Enter a number between 0 and 10");
  var charType = prompt('Enter a character type: special, numeric, uppercase, lowercase');
 
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
 
  passwordText.value = password;
 
 
//generated password
function generatePassword() {
  //evaluates character type based on user input
   var charSet = "";
   var charTypeLower = charType.toLowerCase();
 
  switch(charTypeLower){
    case "lowercase":
      charSet = ("abcdefghijklmnopqrstuvwxyz")
      break;
    case "uppercase":
      charSet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ")
      break;
    case "numeric":
      charSet = ("1234567890")
      break;
    case "special":
      charSet = ("!\"#$%&'()*+")
      break;
    case "all":
      charSet = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
      break;
    case "lowercase and uppercase":
    case "uppercase and lowercase":
      charSet = ("abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ")
      break;
    case "lowercase and numeric":
    case "numeric and lowercase":
      charSet = ("abcdefghijklmnopqrstuvwxyz0123456789")
      break;
    case "lowercase and special":
    case "special and lowercase":
      charSet = ("abcdefghijklmnopqrstuvwxyz!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
      break;
    case "uppercase and numeric":
    case "numeric and uppercase":
      charSet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789")
      break;
    case "uppercase and special":
    case "special and uppercase":
      charSet = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
      break;
    case "special and numeric":
    case "numeric and special":
      charSet = ("0123456789!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~")
      break;
    default:
      alert("Please enter a valid input")
  }

  //return value
  var cutsomPassword = "";
  for (var i = 0; i < parseInt(length); i++) {
    //picks a character within charSet at index of a random number
    cutsomPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }
  return cutsomPassword;
}
}
//  I had a difficult time with this. My final result was not what I wanted. 
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)

