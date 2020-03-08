// Assignment Code
var generateBtn = document.querySelector("#generate");
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
var numbers = "1234567890".split("");
var specialCharacters = "!@#$%^&*()/;:".split("");
var userPasswordLength = 0;
var userWantsUppercase = false
var userWantsLowercase = false;
var userWantsNumbers = false;
var userWantsSpecialCharacters = false;
var randomPassword = []
var passwordLength = []

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword(){
  askTheUser()
  pickRandomCharacters()
  return randomPassword.join()
  

}



function askTheUser() {
   userPasswordLength = prompt("what password length do you want?")
   userWantsUppercase = confirm("Do you want an uppercase password?")
   userWantsLowercase = confirm("Do you want a lowercase password?")
   userWantsNumbers = confirm("Do you want numbers in your password?")
   userWantsSpecialCharacters = confirm("Do you want special characters in your password?")
}




function pickRandomCharacters() {

  if (userWantsUppercase) {
    
    randomPassword.push(uppercase[Math.floor(Math.random() * uppercase.length)])

    // use the userPasswordLength and use the length of uppercase to pick a random index number from 1 to 26
  }
  if (userWantsLowercase) {
    
    randomPassword.push(lowercase[Math.floor(Math.random() * lowercase.length)])
  }

  if  (userWantsSpecialCharacters)  {
    randomPassword.push(specialCharacters[Math.floor(Math.random() * specialCharacters.length)])
  }

  if  (userWantsNumbers)  {
    randomPassword.push(numbers[Math.floor(Math.random() * numbers.length)])
  }

}




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// function passwordlength(password, minlength, maxlength)
// { 
// var field = passwordlength.value; 
// var mnlen = 8;
// var mxlen = 126;

// }

// if (passwordLength<mnlen || passwordLength> mxlen)
// { 
// alert("Please input password between " +mnlen+ " and " +mxlen+ " characters");
// return false;
// }
// else
// { 
// alert('Your password accepted.');
// return true;
// }