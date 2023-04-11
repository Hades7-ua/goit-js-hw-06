// const liTotalItem = document.querySelectorAll(".item");

// console.log(`Numbers of categories: ${liTotalItem.length}`);

// liTotalItem.forEach((el) => {
//   console.log("");
//   console.log(`Category : ${el.firstElementChild.textContent}`);
//   //   console.log("");
//   console.log(`Elements : ${el.lastElementChild.children.length}`);
// });

const TotalNumbersOfCategories = document.querySelectorAll("#categories .item");

let sum = 0;

TotalNumbersOfCategories.forEach(() => (sum += 1));
console.log(`Numbers of categories: ${sum}`);

// ***************************

const totalOfLi = document.querySelectorAll(".item");

totalOfLi.forEach((el) => {
  console.log("");
  console.log(`Category: ${el.firstElementChild.textContent}`);
  console.log(`Elements: ${el.lastElementChild.children.length}`);
});
