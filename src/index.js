import "./style.css";

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
