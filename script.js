let symbol = "";
let number = "";
let upperCase = "";
let lowerCase = "";
let choices = "";

// Arrays to collect data from
const spec = ["!", "@", "#", "$", "%", "&", "*", "(", ")"];
const upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
const lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

const generateBtn = document.querySelector("#generate");

generateBtn.addEventListener ("click", function() {
  password = generatePassword();
  document.getElementById("password").textContent = password;
});


// Calls the password generator 
function generatePassword() {

  generate = parseInt(prompt("How many characters would you like? Please choose between 8 - 128"));
  
  // if options outside of given parameters
  if (generate < 8 || generate > 128) {
    generate = parseInt(prompt("You must choose between 8 and 128 characters"));

  } else if (!generate) {
      alert("A value must be entered to proceed");

  } else {
      symbol = confirm("Would you like symbols?");
      number = confirm("Would you like numbers?");
      upperCase = confirm("Would you like uppercase letters?");
      lowerCase = confirm("Would you like lowercase letters?");
   };
    
    // none chosen
    if (!symbol && !number && !upperCase && !lowerCase) {
      choices = alert("You must choose at least one option!");

    // all 4 chosen
    } else if (symbol && number && upperCase && lowerCase) {
        choices = num.concat(spec, lower, upper);

    // 3 chosen
    } else if (symbol && number && lowerCase) {
        choices = num.concat(spec, lower);
    } else if (symbol && lowerCase && upperCase) {
        choices = lower.concat(spec, upper);
    } else if (number && lowerCase && upperCase) {
        choices = num.concat(lower, upper);

    // 2 chosen
    } else if (symbol && number) {
        choices = num.concat(spec);
    } else if (symbol && upperCase) {
        choices = lower.concat(upper);
    } else if (symbol && lowerCase) {
        choices = spec.concat(lower);
    } else if (upperCase && lowerCase) {
      choices = upper.concat(lower);
    } else if (upperCase && number) {
      choices = upper.concat(num);
    }else if (lowerCase && number) {
      choices = lower.concat(num);

      // 1 chosen
    } else if (symbol) {
        choices = spec;
    } else if (upperCase) {
        choices = upper;
    } else if (lowerCase) {
        choices = lower;
    } else if (number) {
        choices = num;
    };

    let results = [];

    for (i = 0; i < generate; i++) {
      const randomGen = choices[Math.floor(Math.random() * choices.length)];
      results.push(randomGen);
    }


    const password = results.join('');
    return password;

}; 
