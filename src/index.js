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
let stateImage = "fen.gif";
let imgBox = document.getElementById("imageBox");
let lastImage = document.getElementById("lastPicture");
let nextImage = document.getElementById("nextPicture");

lastImage.addEventListener("click", function () {
  let imgIndex = imagesChess.indexOf(stateImage);
  console.log(imgIndex, imagesChess.length - 1);
  if (imgIndex >= 1) {
    let lastImageIndex = imgIndex - 1;
    stateImage = imagesChess[lastImageIndex];
  }
  let imageRemove = imgBox.firstElementChild;
  if (imageRemove !== null && imgIndex >= 1) {
    imageRemove.remove();
    const image = document.createElement("img");
    image.src = "images/" + stateImage;
    image.width = "250";
    image.height = "250";
    imgBox.appendChild(image);
  }
});

nextImage.addEventListener("click", function () {
  let imgIndex = imagesChess.indexOf(stateImage);
  console.log(imgIndex, imagesChess.length - 1);
  if (imgIndex < imagesChess.length - 1) {
    let nextImageIndex = imgIndex + 1;
    stateImage = imagesChess[nextImageIndex];
  }
  let imageRemove = imgBox.firstElementChild;
  if (imageRemove !== null && imgIndex < imagesChess.length - 1) {
    imageRemove.remove();
    const image = document.createElement("img");
    image.src = "images/" + stateImage;
    image.width = "250";
    image.height = "250";
    imgBox.appendChild(image);
  }
});

function toggleElement() {
  let element = document.getElementById("buttonColors");
  element.classList.toggle("hideElement");
}

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

export { toggleElement };
