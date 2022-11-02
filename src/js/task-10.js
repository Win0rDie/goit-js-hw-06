// Напиши скрипт створення і очищення колекції елементів. Користувач вводить кількість елементів в input і натискає кнопку Створити,
// після чого рендериться колекція. Натисненням на кнопку Очистити, колекція елементів очищається.

// <div id="controls">
//   <input type="number" min="1" max="100" step="1" />
//   <button type="button" data-create>Create</button>
//   <button type="button" data-destroy>Destroy</button>
// </div>

// <div id="boxes"></div>

// Створи функцію createBoxes(amount), яка приймає один параметр - число. Функція створює стільки <div>, скільки вказано в amount і додає їх у div#boxes.

// 1. Розміри найпершого <div> - 30px на 30px.
// 2. Кожен елемент після першого повинен бути ширшим і вищим від попереднього на 10px.
// 3. Всі елементи повинні мати випадковий колір фону у форматі HEX. Використовуй готову функцію getRandomHexColor для отримання кольору.
//
// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215)
//     .toString(16)
//     .padStart(6, 0)}`;
// }

// Створи функцію destroyBoxes(), яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");

const createBtn = document.querySelector("[data-create]");

const destroyBtn = document.querySelector("[data-destroy]");
// console.log(destroyBtn)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

//--- Greate box
function createBoxes(amount) {
  const sizeBox = 30;
  let markup = "";
  for (let i = 0; i < amount; i++) {
    markup += `<div style=
    "width:${sizeBox + 10 * i}px;
    height:${sizeBox + 10 * i}px; 
    background-color:${getRandomHexColor()}"></div>`;
  }
  boxesEl.innerHTML = markup;
}

createBtn.addEventListener("click", () => {
  createBoxes(+inputEl.value);
});

//--- Destroy box
function destroyBoxes() {
  boxesEl.innerHTML = "";
}

destroyBtn.addEventListener("click", destroyBoxes);
