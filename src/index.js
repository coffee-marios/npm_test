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

  return slideImg;
};

const parentElement = document.getElementById("imagesElement");
parentElement.appendChild(componentSlide(imagesChess));

let passedImage = document.getElementById("passedPicture");

let nextImage = document.getElementById("nextPicture");
//
//

passedImage.addEventListener("click", function () {
  let slide = document.getElementById("imageBox");

  if (stateImage > 0) {
    slide.childNodes[stateImage].style.display = "none";

    stateImage -= 1;
    slide.childNodes[stateImage].style.display = "block";
  }
});

nextImage.addEventListener("click", function () {
  let slide = document.getElementById("imageBox");

  if (stateImage < imagesChess.length - 1) {
    slide.childNodes[stateImage].style.display = "none";

    stateImage += 1;
    slide.childNodes[stateImage].style.display = "block";
  }
});

let topButtons = document.querySelectorAll(".navButton");
let dropMenus = document.querySelectorAll(".dropOptions");

const mapNav = new Map();
for (let i = 0; i < topButtons.length; i++) {
  mapNav.set(topButtons[i], dropMenus[i]);
}

console.log(dropMenus[0]);

// Every time we click a button:
// its color changes;
// a dropdown menu appears or disappears

topButtons.forEach((topButton) => {
  topButton.addEventListener("click", function () {
    for (let i = 0; i < topButtons.length; i++) {
      topButtons[i].style.backgroundColor = "rgb(226, 188, 53)";
    }
    mapNav.get(topButton).classList.toggle("hideElement");
    topButton.style.backgroundColor = "green";
  });
});
