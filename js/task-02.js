const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const itemLi = document.querySelector("#ingredients");

const arrayLi = ingredients.map((add) => {
  const newLI = document.createElement("li");
  newLI.classList.add("item");
  newLI.textContent = add;
  return newLI;
});

itemLi.append(...arrayLi);

console.log(itemLi);

// --------------->>> Нижче спробував через innerHTML

// const itemLi = document.querySelector("#ingredients");

// const newLi = ingredients.map((el) => `<li class="item">${el}</li>`).join("");

// itemLi.append(...newLi);

// console.log(itemLi);

// itemLi.innerHTML = newLi;
