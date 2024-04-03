import "./style.css";

function toggleElement() {
  let element = document.getElementById("buttonColors");
  element.classList.toggle("hideElement");
}

let myButton = document.getElementById("buttonEl");
myButton.addEventListener("click", toggleElement, false);

let topButtons = document.querySelectorAll(".navButton");

topButtons.forEach((topButton) => {
  topButton.addEventListener("click", function () {
    for (let i = 0; i < topButtons.length; i++) {
      topButtons[i].style.backgroundColor = "rgb(226, 188, 53)";
    }

    topButton.style.backgroundColor = "green";
  });
});

export { toggleElement };
