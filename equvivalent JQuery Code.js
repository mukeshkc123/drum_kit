/*
This is the equivalent code of the Drum Kit, rewritten using the jQuery JavaScript library.
Please add this code by changing the script file in the drum kit index.html.


*/

//Detection of the dcreen press

$(".drum").on("click", function (e) {
  var screenButtonKey = $(this).text();
  makeSound(screenButtonKey);
  buttonAnimation(screenButtonKey);
});

//detection of keyboard strokes

$(document).keydown(function (e) {
  makeSound(e.key);
  if (/^[^a-z]$/.test(e.key)) {
    buttonAnimation("x");
  } else {
    buttonAnimation(e.key);
  }
});

// function to play sounds;
function makeSound(keyBoardKey) {
  switch (keyBoardKey) {
    case "a":
    case "q":
    case "w":
    case "e":
      var tom1 = new Audio("./sounds/tom-1.mp3");
      tom1.play();
      break;

    case "r":
    case "t":
    case "y":
    case "u":
      var tom2 = new Audio("./sounds/tom-2.mp3");
      tom2.play();
      break;

    case "i":
    case "o":
    case "p":
    case "l":
      var tom3 = new Audio("./sounds/tom-3.mp3");
      tom3.play();
      break;

    case "s":
    case "d":
    case "f":
    case "g":
      var tom4 = new Audio("./sounds/tom-4.mp3");
      tom4.play();
      break;

    case "h":
    case "j":
    case "k":
      var crash = new Audio("./sounds/crash.mp3");
      crash.play();
      break;

    case "z":
    case "x":
    case "c":
    case "v":
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;

    case "b":
    case "n":
    case "m":
      var snare = new Audio("./sounds/snare.mp3");
      snare.play();
      break;

    default:
      var kick = new Audio("./sounds/kick-bass.mp3");
      kick.play();
      break;
  }
}

//function for animation
function buttonAnimation(buttonKey) {
  var btnKey = $("." + buttonKey);

  btnKey.addClass("pressed");
  btnKey.addClass("pop-out");

  setTimeout(function () {
    btnKey.removeClass("pressed");
    btnKey.removeClass("pop-out");
  }, 100);
}
