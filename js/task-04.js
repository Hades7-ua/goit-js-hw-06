const btnDecrement = document.querySelector('[data-action="decrement"]');

const valueEl = document.querySelector("#value");

const btnIncrement = document.querySelector('[data-action="increment"]');

let counterValue = 0;

btnDecrement.addEventListener("click", onBtnDecrement);

function onBtnDecrement() {
  valueEl.textContent = counterValue -= 1;
}

btnIncrement.addEventListener("click", onBtnIncrement);

function onBtnIncrement() {
  valueEl.textContent = counterValue += 1;
}
