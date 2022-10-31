// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.

/* <div id="counter">
  <button type="button" data-action="decrement">-1</button>
  <span id="value">0</span>
  <button type="button" data-action="increment">+1</button>
</div> */

// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const countId = document.querySelector("#counter");
console.log(countId);
console.log(countId.firstElementChild);
console.log(countId.childNodes[3]);

const a = countId.firstElementChild.addEventListener("click", () => {
  counterValue -= 1;
  countId.childNodes[3].textContent = counterValue;
  console.log("-1 next step");
});

const b = countId.lastElementChild.addEventListener("click", () => {
  counterValue += 1;
  countId.childNodes[3].textContent = counterValue;
  console.log("+1 next step");
});
