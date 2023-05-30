const btn = document.querySelector(".change-color");
const color = document.querySelector(".color");

btn.addEventListener("click", changeColor);

function changeColor() {  
  document.body.style.backgroundColor = getRandomHexColor();  
  color.textContent = getRandomHexColor();  
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
