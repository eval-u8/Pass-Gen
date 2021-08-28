// Assignment code here
var lowerC = "qazwsxedcrfvtgbyhnujmikolp";
var upperC = "QAZWSXEDCRFVTGBYHNUJMIKOLP";
var symb = "!$%()&*+,-./:;<=>?@[]^_`{}|~#";
var numb = "1234567890";

function generatePassword() {
  // ask user for desired length.
  var lengthU = prompt("How long would you like your password to be? Please enter the number of characters you'd like to have.\n \nThis cannot be shorter than 8 characters, nor longer than 128 characters. Please enter a number only.");
  // set conditions for its length
  if (lengthU < 8 || lengthU > 128 || lengthU === null || isNaN(lengthU)) {
    alert("Please enter a valid number for the range of characters (8-128)");
    generatePassword();
  }
  var userPassPool = "";
  var tempPass = "";
// ask user if lowercase
  var confLower = confirm("Would you like to include lowercase characters to your password?");
  if (confLower) {
    // confirm("Are you sure you'd like to add lowercase characters??");
    userPassPool = userPassPool + lowerC;
    tempPass += lowerC[Math.floor(Math.random() * lowerC.length)];
    // console.log(tempPass);
  }
//ask user if uppercase
  var confUpper = confirm("Would you like to include UPPERCASE characters to your password?");
  if (confUpper) {
    // confirm("Are you sure you'd like to add UPPERCASE characters??");
    userPassPool = userPassPool + upperC;
    tempPass += upperC[Math.floor(Math.random() * upperC.length)];
    // console.log(tempPass);
  }
  //ask user if numbers
  var confNume = confirm("Would you like to include num3r1c characters to your password?");
  if (confNume) {
    // confirm("Are you sure you'd like to add num3r1c characters??");
    userPassPool = userPassPool + numb;
    tempPass += numb[Math.floor(Math.random() * numb.length)];
    // console.log(tempPass);
  }
  //ask user if special
  var confSpec = confirm("Would you like to include $pec!@l characters to your password?");
  if (confSpec) {
    // confirm("Are you sure you'd like to add $pec!@l characters??");
    userPassPool = userPassPool + symb;
    tempPass += symb[Math.floor(Math.random() * symb.length)];
    // console.log(tempPass);
  }

  if (userPassPool === "") {
    alert("You did not select any critera, please select at least one");
    generatePassword();
  }
  

    for (var i = tempPass.length; i < lengthU ; i++) {
    var finalPass = userPassPool[Math.floor(Math.random() * userPassPool.length)];
    tempPass += finalPass;
    }

      function shuffle() {
        var tempArr = tempPass.split("");
          for (let i = tempArr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = tempArr[i];
            tempArr[i] = tempArr[j];
            tempArr[j] = temp;
        };
        return tempArr.join("");
      }
      const result = shuffle();
    return result;
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
