import "./style.css";

let imagesChess = [
  "fen.gif",
  "e4.gif",
  "fen3.gif",
  "fen4.gif",
  "fen5.gif",
  "fen6.gif",
  "fen7.gif",
  "fen8.gif",
];

let stateImage = 0;

const componentSlide = function (arrayImages) {
  let numberImg = arrayImages.length - 1;

  const slideImg = document.createElement("div");
  slideImg.setAttribute("id", "imageBox");

  for (let i = 0; i <= numberImg; i++) {
    const divImg = document.createElement("div");
    slideImg.appendChild(divImg);
    const imgChess = document.createElement("img");
    imgChess.src = "images/" + imagesChess[i];
    imgChess.width = "250";
    imgChess.height = "250";
    divImg.appendChild(imgChess);
    divImg.style.display = "none";
  }
  slideImg.firstChild.style.display = "block";
  const dotDiv = document.createElement("div");
  dotDiv.setAttribute("id", "dotContainer");
  slideImg.appendChild(dotDiv);

  for (let i = 0; i <= numberImg; i++) {
    const dot = document.createElement("span");
    dot.classList.add("dot");
    dotDiv.appendChild(dot);
  }
  dotDiv.firstChild.style.backgroundColor = "green";
  return slideImg;
};

const parentElement = document.getElementById("imagesElement");
parentElement.appendChild(componentSlide(imagesChess));

const passedImage = document.getElementById("passedPicture");

const nextImage = document.getElementById("nextPicture");
const autoImage = document.getElementById("autoImg");
//
//

let playingVideo = false;
let intervalId;

function repeatEvent() {
  nextImage.click();
}

function stopVideo() {
  clearInterval(intervalId);
  playingVideo = false;
}

const stopButton = document.getElementById("stopImg");

// Event listener to detect other user actions
stopButton.addEventListener("click", function () {
  if (playingVideo == true) {
    stopVideo();
  }
});

autoImage.addEventListener("click", function () {
  playingVideo = true;
  intervalId = setInterval(repeatEvent, 900);
});

passedImage.addEventListener("click", function () {
  let slide = document.getElementById("imageBox");
  let dotContainer = document.getElementById("dotContainer");

  if (stateImage > 0) {
    slide.childNodes[stateImage].style.display = "none";
    dotContainer.childNodes[stateImage].style.backgroundColor = "yellow";

    stateImage -= 1;
    slide.childNodes[stateImage].style.display = "block";
    dotContainer.childNodes[stateImage].style.backgroundColor = "green";
  }
});

nextImage.addEventListener("click", function () {
  let slide = document.getElementById("imageBox");
  let dotContainer = document.getElementById("dotContainer");

  if (stateImage < imagesChess.length - 1) {
    slide.childNodes[stateImage].style.display = "none";
    dotContainer.childNodes[stateImage].style.backgroundColor = "yellow";
    stateImage += 1;
    dotContainer.childNodes[stateImage].style.backgroundColor = "green";
    slide.childNodes[stateImage].style.display = "block";
  } else if (stateImage == imagesChess.length - 1) {
    dotContainer.childNodes[stateImage].style.backgroundColor = "yellow";
    slide.childNodes[stateImage].style.display = "none";
    stateImage = 0;
    dotContainer.childNodes[stateImage].style.backgroundColor = "green";
    slide.childNodes[stateImage].style.display = "block";
  }
});

let topButtons = document.querySelectorAll(".navButton");
let dropMenus = document.querySelectorAll(".dropOptions");

const mapNav = new Map();
for (let i = 0; i < topButtons.length; i++) {
  mapNav.set(topButtons[i], dropMenus[i]);
}

// Every time we click a button:
// its color changes;
// a dropdown menu appears or disappears

topButtons.forEach((topButton) => {
  topButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Stop event propagation
    for (let i = 0; i < topButtons.length; i++) {
      let eachButton = topButtons[i];
      if (topButton !== eachButton) {
        mapNav.get(eachButton).classList.remove("hideElement");
        eachButton.classList.remove("buttonClicked");
      }
    }
    mapNav.get(topButton).classList.toggle("hideElement");
    topButton.classList.toggle("buttonClicked");
  });
});

function setBackground(buttonColorId, classColorBody, colorDrop) {
  const buttonColor = document.getElementById(buttonColorId);
  buttonColor.addEventListener("click", function () {
    const classElement = [...document.body.classList];
    if (classElement.length > 0) {
      classElement.forEach((myClass) => {
        document.body.classList.remove(myClass);
      });
    }
    document.body.classList.add(classColorBody);
    dropMenus.forEach((element) => {
      element.style.background = colorDrop;
    });
  });
}

setBackground("dark-background", "myDark-background", "rgb(3,3,3)");
setBackground("green-background", "myGreen-background", "rgb(0,244,0)");
setBackground("blue-background", "myBlue-background", "rgb(0,0,200)");
setBackground(
  "original-background",
  "myOriginal-background",
  "rgb(252, 211, 148)"
);

const myBody = document.body;

myBody.addEventListener("click", () => {
  dropMenus.forEach((menu) => {
    menu.classList.remove("hideElement");
  });
});
