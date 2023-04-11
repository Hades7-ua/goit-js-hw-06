const input = document.querySelector("#font-size-control");
const spanEl = document.querySelector("#text");

input.addEventListener("input", onFontSize);

function onFontSize(event) {
  spanEl.style.fontSize = event.currentTarget.value + "px";
}
