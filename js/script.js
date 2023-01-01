// 1) Створити функцію конструктор яка створює обєкт юзер (з даними імя, прізвище, вік, також в юзера повинен бути унікальний
//    іd номер від 1 до 10) в функції конструкторі повиний бути метод виводу інформації про юзера.
// Метод повинен бути винесений в прототип.

function User(name, secondName, age, id) {
  function Info() {
    (this.name = name),
      (this.secondName = secondName),
      (this.age = age),
      (this.id = id);
  }
  this.info = new Info();
  console.table(this.info);
}

let a = new User("james", "Bond", "33", "7");
let b = new User("Salo", "Malo", "777", "3");

// 2)Створити методи на прототайп для оновлення ключів об'єкту юзер наприклад змінити ім'я , вік користувача.ІD не міняється
User.prototype.updateInfo = function (name, secondName, age) {
  this.name = name;
  this.secondName = secondName;
  this.age = age;
  return;
};
a.updateInfo("Innokentiy", "Mazerati", 30);
console.log(a);

// 3) Створити функцію конструктор створення (прямокутника, квадрата ) в прототип винести методи обчислення Площі
// , переметра, та визначення діагоналі
function Squrt(sizeA, sizeB) {
  this.sizeA = sizeA;
  this.sizeB = sizeB;
  this.S = this.sizeA * this.sizeB;
  this.P = this.sizeA + this.sizeA + this.sizeB + this.sizeB;
  this.D = Math.sqrt(Math.pow(this.sizeA, 2) + Math.pow(this.sizeB, 2));
}
let qurt = new Squrt(4, 4);

console.info([qurt.D, qurt.S, qurt.P]);

// this.S = this.sizeA * this.sizeB;
// this.P = this.sizeA + this.sizeA + this.sizeB + this.sizeB;
// 4) Отримати від користувача значення name  вивести в консоль, першу і останню літеру з name в ерхньому регістрі.
let myWord = prompt("Input name");
let upper = myWord.replace(myWord[0], myWord[0].toUpperCase());
console.log(upper.slice(0, -1) + upper.at(-1).toUpperCase());
// 5) Створити функцію яка отримує стрінг, обрізає пробіли спочатку і кінця стрінгу, якщо стрінг маж довжину
//  більше 10 то відрізає все після 10 і додає 3 крапки

function Str() {
  let a = "     hello word!!!     ";
  let b = a.trim();

  if (b.length >= 10) {
    return b.slice(0, 10) + "...";
  }
  return b;
}
let c = Str();
console.info(c);
