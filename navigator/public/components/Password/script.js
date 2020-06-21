function Password(){
    let password = document.querySelectorAll(".Password");
    password.active = 0;
    for (let s = 0; s < password.length; s++) {
        let input = password[s].querySelectorAll("input");
        let validation = password[s].querySelectorAll("p");
        input = input[0];
        let i = password[s].querySelectorAll("i");
        for (let b = 0; b < i.length; b++) {
            i[b].addEventListener('click', function() {
                if(input.type === 'password')input.type="text";
                else input.type="password";
            });
        }
        if(validation && input){
            PasswordValidation(password[s]);
        }
    }
}

function PasswordValidation(father){
    let input = father.querySelectorAll("input");
    input = input[0];
    let validation = father.querySelectorAll("p");
    console.log(validation);
var letter = validation[0];
var capital = validation[1];
var number = validation[2];
var length = validation[3];


// When the user clicks on the password field, show the message box
input.onfocus = function() {
    console.log(validation);
    for (let b = 0; b < validation.length; b++)validation[b].classList.add("active");

}

// When the user clicks outside of the password field, hide the message box
input.onblur = function() {
    for (let b = 0; b < validation.length; b++)validation[b].classList.remove("active");
}
// When the user starts to type something inside the password field
input.onkeyup = function() {

  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(input.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
}

  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(input.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(input.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if(input.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
}

// Run
window.onload = function() { new Password(); };
