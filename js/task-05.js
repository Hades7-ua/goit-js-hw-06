const input = document.querySelector("#name-input");

const spanEl = document.querySelector("#name-output");

input.addEventListener("input", onInputChange);

function onInputChange(event) {
  spanEl.textContent = event.currentTarget.value;
  if (input.value === "") {
    spanEl.textContent = "Anonymous";
  }
}
