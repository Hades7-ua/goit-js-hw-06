function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const buttonColorClick = document.querySelector(".change-color");

buttonColorClick.addEventListener("click", onButtonClick);

const spanColor = document.querySelector(".color");

const bodyColor = document.querySelector("body");

function onButtonClick(event) {
  const bodyRandomColor = getRandomHexColor();

  bodyColor.style.backgroundColor = bodyRandomColor;
  spanColor.textContent = bodyRandomColor;
}

// const span = document.querySelector(".color");
// span.textContent = getRandomHexColor();
