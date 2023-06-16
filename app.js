//Detction of Screen press
for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var screenButtonKey = this.innerHTML;
    makeSound(screenButtonKey);
  });
}

//detection of the Keyboard strokes
document.addEventListener("keydown", function (event) {
  makeSound(event.key);
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
