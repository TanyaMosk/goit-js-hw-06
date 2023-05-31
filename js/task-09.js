const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {
  const backgroundColor = getRandomHexColor();
  document.body.style.backgroundColor = backgroundColor;  
  color.textContent = backgroundColor;  
  // console.log(backgroundColor);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
