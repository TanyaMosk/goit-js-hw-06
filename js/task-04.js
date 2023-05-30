const refs = {
  counter: document.querySelector("#counter"),
  valueNum: document.getElementById("value"),
  decrementBtn: document.querySelector('[data-action="decrement"]'),
  incrementBtn: document.querySelector('[data-action="increment"]'),
};

let counterValue = 0;

const onClickDecrementBtn = (event) => {
  counterValue -= 1;
  refs.valueNum.textContent = counterValue;
};
const onClickIncrementBtn = (event) => {
  counterValue += 1;
  refs.valueNum.textContent = counterValue;
};

refs.decrementBtn.addEventListener("click", onClickDecrementBtn);
refs.incrementBtn.addEventListener("click", onClickIncrementBtn);

// const onClickDecrementBtn = (event) => {
//   if (counterValue !== 0) {
//     counterValue -= 1;
//     refs.valueNum.textContent = counterValue;
//   }
// };
