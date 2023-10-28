const decrement = document.querySelector(".counter-box__btn--decrement");
const increment = document.querySelector(".counter-box__btn--increment");
const reset = document.querySelector(".counter-box__btn--reset");
const counterEl = document.querySelector(".counter-box__counter");

let counter = 0;

decrement.addEventListener("click", () => {
  counter -= 1;
  counterEl.textContent = counter.toString();
});

increment.addEventListener("click", () => {
  counter += 1;
  counterEl.textContent = counter.toString();
});

reset.addEventListener("click", () => {
  counter = 0;
  counterEl.textContent = counter.toString();
});
