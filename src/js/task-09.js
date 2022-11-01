// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по 
// кліку на button.change-color і виводить значення кольору в span.color.

// <div class="widget">
//   <p>Background color: <span class="color">-</span></p>
//   <button type="button" class="change-color">Change color</button>
// </div>

// Для генерування випадкового кольору використовуй функцію getRandomHexColor.


const widgetColor = document.querySelector('.widget');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

widgetColor.addEventListener('click', handleBtnToChangeColor)

function handleBtnToChangeColor() {
  widgetColor.parentNode.style.backgroundColor = getRandomHexColor()
  widgetColor.children[0].childNodes[1].textContent = getRandomHexColor()
}