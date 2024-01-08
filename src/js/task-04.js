let counterValue = 0;

const decrementBtn = document.querySelector("[data-action ='decrement']");
const incrementBtn = document.querySelector("[data-action ='increment']");
const valueEl = document.querySelector("#value");

decrementBtn.addEventListener("click", function () {
  console.log(decrementBtn);
  counterValue -= 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});

incrementBtn.addEventListener("click", function () {
  console.log(incrementBtn);
  counterValue += 1;
  console.log(counterValue);
  valueEl.textContent = counterValue;
});
