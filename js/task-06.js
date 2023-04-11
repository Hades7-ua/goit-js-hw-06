const input = document.querySelector("input");

input.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  if (event.currentTarget.value.length == input.dataset.length) {
    input.classList.add("valid");
  } else {
    input.classList.add("invalid");
  }
}
