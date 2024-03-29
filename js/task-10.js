// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити, після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// Розміри найпершого <div> - 30px на 30px.
// Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const refs = {
  control: document.querySelector("#controls > input"),
  createElement: document.querySelector("button[data-create]"),
  destroyElement: document.querySelector("button[data-destroy]"),
  boxes: document.querySelector("#boxes"),
};

refs.createElement.addEventListener("click", createBoxes);
refs.destroyElement.addEventListener("click", destroyBoxes);

// function getElement() {
//   let elements = refs.control.value;
//   createBoxes(elements);
// }

// function createBoxes() {
  
//   refs.boxes.innerHTML = "";   
//   let elements = refs.control.value;
//   let basicSize = 30;

//   for (let i = 0; i < elements; i += 1) {
//     let div = document.createElement("div");
//     div.style.width = basicSize + 10 * i + "px";
//     div.style.height = basicSize + 10 * i + "px";
//     div.style.backgroundColor = getRandomHexColor();
//     refs.boxes.append(div);
//   }
// };


function createBoxes() {
  refs.boxes.innerHTML = "";
  // Перетворюємо введене значення у число
  let elementsCount = parseInt(refs.control.value); 
  let basicSize = 30;

  Array.from({ length: elementsCount }).forEach((_, i) => {
    let div = document.createElement("div");
    div.style.width = basicSize + 10 * i + "px";
    div.style.height = basicSize + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    refs.boxes.append(div);
  });
}


function destroyBoxes() {
  refs.boxes.innerHTML = "";   
};
