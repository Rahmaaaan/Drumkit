// Finding the .drum class that is 7 and storing into the variable
var numberOfDrumButtons = document.querySelectorAll(".drum").length;

/* Putting while loop where is start from 0 and stops when i will be greater than numberOfDrumButtons 
that is 7 and then i value will be incremented in loop */
for (var i = 0; i < numberOfDrumButtons; i++) {
  /******************** DETECTING BUTTON PRESS ********************/

  /* Finding the .drum class in index.html and multiplying with i value which we will get from loop
    Adding click event which (1) type = click (2) listener = function of handleClick where audio is stored */

  document.querySelectorAll(".drum")[i].addEventListener("click", handleClick);

  /******************** DETECTING KEYBOARD PRESS ********************/

  /*Adding click event which (1) type = keydown (2) listener = function of keyPressed where audio is stored */

  document.addEventListener("keydown", keyPressed);
}

//Storing all the sounds in function of makeSound & function containsswitch break loop
function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "j":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "l":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    default:
      console.log(buttonInnerHTML);
      break;
  }
}

// Storing value in function called handleClick where sound & animation is done when the mouse is clicked
function handleClick() {
  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
}

// Storing value in function called keyPressed where sound & animation is done when the keyboard is clicked
function keyPressed(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(timeOutAnimation, 100);

  function timeOutAnimation() {
    activeButton.classList.remove("pressed");
  }
}
