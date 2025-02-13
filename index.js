const buttonNo = document.querySelector(".btn-no");
const buttonYes = document.querySelector(".btn-yes");
const text = document.querySelector(".text");
const smallText = document.querySelector(".small-text");
let initialNoPosX = 0;
let initialNoPosY = 0;
let clickCount = 0;
const minNoScale = 0.3;

let yesScale = 1;

let gif = document.querySelector(".img");

function createHearts() {
  // how many hearts
  const numberofHearts = 17;

  // colors for hearts
  const colors = ["#c31c1c", "#bf3129", "#9c1212", "#eea9a9"];
  const heartContainer = document.querySelector(".heart-container");

  // create hearts
  for (let i = 0; i < numberofHearts; i++) {
    // create hearts
    let heart = document.createElement("div");
    heart.classList.add("heart");

    // pick random colour
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomPosition = Math.floor(Math.random() * 101);
    const randomSize = Math.floor(Math.random() * (80 - 7 + 1)) + 7;
    const randomOpacity = (Math.random() * 0.5 + 0.5).toFixed(2);

    // change the heart css properties
    heart.style.setProperty("--color", randomColor);
    heart.style.setProperty("--position", `${randomPosition}%`);
    heart.style.setProperty("--size", `${randomSize}px`);
    heart.style.setProperty("--opacity", randomOpacity);

    // add to the body, add a timeout
    setTimeout(function () {
      heartContainer.appendChild(heart);
    }, i * 600);
  }
}

function clickYes() {
  gif.src = "assets/snoopy-woodstock (1).gif";
  buttonNo.style.display = "none";
  buttonYes.style.display = "none";
  text.innerHTML = "Yay!"
  smallText.innerHTML = "now take your clothes off and send me spicy pic";
}

function clickNo() {
  if (clickCount <= 2) {
    if (clickCount == 0) {
      gif.src = "assets/thinking woodstock GIF by Peanuts.gif";
    } else if (clickCount == 1) {
      gif.src = "assets/snoopy-woodstock (3).gif";
      buttonYes.style.transition = "transform 0.4s ease-in-out";
      yesScale += 0.1;
      buttonYes.style.transform = `scale(${yesScale})`;
    } else {
      gif.src = "assets/snoopy-what.gif";
      buttonYes.style.transition = "transform 0.4s ease-in-out";
      yesScale += 0.1;
      buttonYes.style.transform = `scale(${yesScale})`;
    }
  } else if (clickCount <= 5){
    buttonYes.style.transition = "transform 0.4s ease-in-out";
    yesScale += 0.1;
    buttonYes.style.transform = `scale(${yesScale})`;
    buttonNo.style.transition = "transform 0.4s ease-in-out";
    let currentNoScale =
      parseFloat(
        buttonNo.style.transform.replace("scale(", "").replace(")", "")
      ) || 1;
    if (currentNoScale > minNoScale) {
      buttonNo.style.transform = `scale(${currentNoScale - 0.1})`;
    }
  }
  else{
    buttonNo.style.display = "none";
  }
  clickCount += 1;
}

document.addEventListener("DOMContentLoaded", (event) => {
  createHearts();
});
