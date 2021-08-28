// Assignment code here
var lowerC = "qazwsxedcrfvtgbyhnujmikolp";
var upperC = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
var symb = " !$%()&*+,-./:;<=>?@[]^_`{}|~#";
var numb = "1234567890";

function generatePassword() {
  // ask user for desired length.
  var lengthU = prompt("How long would you like your password to be? Please enter the number of characterS you'd like to have.\n This cannot be shorter than 8 characters, nor longer than 128 characters");
  // set conditions for its length
  if (lengthU < 8 || lengthU > 128 || lengthU === null || isNaN(lengthU)) {
    alert("Please enter a valid number for the range of characters (8-128)");
    generatePassword();
  }
  var userPassPool = "";
// ask user if lowercase
  var confLower = confirm("Would you like to include lowercase characters to your password?");
  if (confLower) {
    confirm("Are you sure you'd like to add lowercase characters??");
    userPassPool = userPassPool + lowerC;
    // console.log(userPassPool);
  }
//ask user if uppercase
  var confUpper = confirm("Would you like to include UPPERCASE characters to your password?");
  if (confUpper) {
    confirm("Are you sure you'd like to add UPPERCASE characters??");
    userPassPool = userPassPool + upperC;
    // console.log(userPassPool);

  }
  //ask user if numbers
  var confNume = confirm("Would you like to include num3r1c characters to your password?");
  if (confNume) {
    confirm("Are you sure you'd like to add num3r1c characters??");
    userPassPool = userPassPool + numb;
    // console.log(userPassPool);

  }
  //ask user if special
  var confSpec = confirm("Would you like to include $pec!@l characters to your password?");
  if (confSpec) {
    confirm("Are you sure you'd like to add $pec!@l characters??");
    userPassPool = userPassPool + symb;
    // console.log(userPassPool);
  }
  var tempPass="";
  for (var i = 0; i < lengthU ; i++) {
    var finalPass = userPassPool[Math.floor(Math.random() * userPassPool.length)];
    tempPass += finalPass;
    console.log(tempPass);
    console.log(userPassPool);
  } return tempPass;
  

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
