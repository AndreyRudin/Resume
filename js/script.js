// console.log(sum(range(1,10)));
// console.log("первая \nвторая"*2);
// console.log(typeof `значение ${100/2}`); //!литерал шаблона(записанные в нем операции высичляются а затем преобразуются в текст)
// console.log(true && false);
// console.log(true || false); //!логические операции
// console.log(true?1:2); //!условие
//*изолирующий символ /n-перенос строки /t-табуляция
//*Типы данных
//*NaN(результат бессмысленных вычислений), Infinity, -Infinity, null, undefined (отсутсвие осмысленного результата, не несут информации)
//*Автоматическое приведение типа, т.е JS попытается выполнить абсолютно любую дичь. Если обнаруживаетсмя где-то NaN, то значит проищошло приведение типов. Если мы хотим сравнить что либо без преобразования типов, то используем ===
// console.log("5"-1);
//*приедение типов для логических операций, false эквивалентно 0, "", NaN, все остальное true. Если какое-либо из значений не может быть преобразовано в boolean, то результатом использования оператора || будет левое значение или правое, если левое может быть преобразовано в False
// console.log(null || 1);
//*упрощенное вычисление, когда в лоигческих операторах не требуется обрабатывать второе значение, если по первому уже известен рещультат
//*Переменные задаются с помощью ключевых слов let, var, const можно задать сразу несколько переменных через запятую после специального слова. Имя переменной состоит из цфир, букв, _, $. Цифра не мб в начале, имя переменной не должно быть специальным зарезервированным слвоом. Окружение  - множество переменных и их значений существующих в данный момент времени
// let one = 1, two = 2;
// console.log(one+two);
//* побочные эффект - когда что-то меняется внутри машины.
//*функции Number.isNaN(theNumber)-проверяет является ли аругмент NaN, любая строка это NaN
// console.log(Math.max(2,4));
//*Условное выполнение, т.е. выполнение программы с использованием условия, цикл do выполняется хотя бы 1 раз
// let theNumber = Number("15"), index = 0;
// while (index < 2) {
//   if (!Number.isNaN(theNumber) && theNumber < 10) {
//     console.log("Это число является квадратным корнем из "+ theNumber*theNumber);
//   }
//   else if (!Number.isNaN(theNumber) && theNumber >= 10) {
//     console.log("Это число является квадратным корнем из "+ theNumber*theNumber +" и оно больше 10");
//   }
//   else{
//     console.log("это не число");
//   }
//   index += 1;
// }

/*do {
  console.log(1);
  index += 1;
} while (index < 3);*/

// for (let number = 0; number < 12; number += 2) {
//   console.log(number);
//   break;
// }

// for (let number = 1; number < 100; number += 1){
//   if (number % 3 === 0 &&number % 5 === 0) {
//     console.log("FizzBuzz");
//   }
//   else if (number % 3 === 0){
//     console.log("Fizz");
//   }
//   else if (number % 5 === 0){
//     console.log("Buzz");
//   }
//   else{
//     console.log(number);
//   }
// }

// Шахматное поле
// let size = 8, flag = true,result = "";
// for (let index1 = 0; index1 < size; index1 ++) {
//   for (let index2 = 0; index2 < size; index2 ++) {
//     if (flag) {
//       result += "#"
//     }
//     else{
//       result += " "
//     }
//     flag = !flag
//   }
// result += "\n"
// }
// console.log(result)

// Функции
// const makeNoise = function(){
//   console.log("Эгегей");
// };

// makeNoise();

// const power = function(base, exponent){
//   let result = 1;
//   for (let count = 0; count < exponent; count ++){
//     result *= base;
//   }
//   return result;
// }

// console.log(power(2,11))

// Область видимости, локальные и глобальные переменные
// let x = 10;
// if (true){
//   var y = 5;
//   let z = 10;
//   console.log(x+y+z);
// };
//  console.log(x+y); //если попытаться посчитать сумму с z то будет ошибка, так как let и const задают переменную только в блоке в котором ее создали

// функцию можно создать также, через ее объявление
// function future() {
//   return "летающих машин не будет"
// };

// const power = (base, exponent) =>{
//   let result = 1;
//   for (let count = 0; count < exponent; count ++){
//     result *= base;
//   }
//   return result;
// }

// console.log(power(10,4));

// Упражнения функции минимум
// const min = function(a,b){
//   result = a;
//   if (b < a){
//     result = b;
//   };
//   console.log(result);
// };
// function min2(a,b){
//   result = a;
//   if (b < a){
//     result = b;
//   };
//   console.log(result);
// };
// const min3 = (a,b) => {
//   result = a;
//   if (b < a){
//     result = b;
//   };
//   console.log(result);
// };
// min3(1,2);

// Количество букв в слове
// function findNumberSymbolsInWord(word, symbol="В") {
//   let count = 0;
//   for (let i = 0; i <= word.length-1; i++) {
//     if (word[i] == symbol){
//       count ++;
//     };
//   };
//   console.log(count);
// };
// findNumberSymbolsInWord("ВеаСВаВааааВ", "а");

// Упраженение рекурсия
// function isEven(number){
//   if (number == 1){
//     console.log("нечетное");
//   };
//   {

//   }
// }

// Описание объект
let kiska = {
  name: "ksusha",
  status: ["plusha","hrusha","pushistik"],
  age: "25",
  "ела сегодня картошку": "нет"
};
kiska["Пусит Андрея"] = false;

console.log(kiska["Пусит Андрея"]);