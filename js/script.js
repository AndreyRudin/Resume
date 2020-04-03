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

//! Упражнения 2.2 функции минимум(работает)
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

//! Упражнение 2.1 Количество букв в слове(работает)
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

//! Упраженение 2.3 рекурсия(не решил)
// function isEven(number){
//   if (number == 1){
//     console.log("нечетное");
//   };
//   {

//   }
// }



//! Упражнение 3.1 Сумма последовательности
// function range(start, end){
//   let result = [];
//   for (let index = start; index <= end; index++) {
//     result.push(index)
//   };
//   return result;
// };
// function sum(...[array]){
//   let summa = 0;
//   for (let index = 0; index < array.length; index++) {
//     summa += array[index]
//   };
//   return summa
// };
// console.log(sum(range(1,10)));

//!Глава 4
//!Индекс элемента
// let listOfNumber = [1,2,3,4];
// console.log(listOfNumber[2]);

//!Смена регисра
// let doh = "Эгегей";
// console.log(typeof doh.toUpperCase);
// console.log(doh.toLowerCase());
// console.log(doh.toUpperCase());

//!Добавление элемента в массив и их удаление(операции со стеком)
// let example = [1,2,3];
// example.push(4);
// example.push(5);
// console.log(example);
// console.log(example.pop());
// console.log(example);

//! Описание объект и его свойства
// let kiska = {
//   name: "ksusha fedulova",
//   status: ["plusha","hrusha","pushistik"],
//   age: 18,
//   "ела сегодня картошку": "нет"
// };
// kiska["Пусит Андрея"] = "постоянно"; //создание свойства вне описания объекта, также его можно поменять
// kiska.status.push("4"); //добавления значения в массив данных
// console.log(kiska.status);
// kiska.status.pop(); //удаление последнего элемента в массиве
// console.log(kiska.status);
// delete kiska.age //удаление свойства
// console.log("status" in kiska); //проверка, есть ли свойство у объекта
// console.log(kiska["Пусит Андрея"]);
// console.log(Object.keys({x:2,y:3})); //посмотреть значение имен свойств
// kiska1 = Object.assign(kiska, {plusha: true}); //создает копию с новыми свойствами или изменением существующих
// console.log(kiska1);

//!Создание объекта, добавление свойств вне объекта
// let day1 ={
//   squirrel: false,
//   events: ["работал","трогал дерево", "ел пиццу", "бегал"]
// };
// console.log(day1.squirrel);
// console.log(day1.wolf);
// day1.wolf = false;
// console.log(day1.wolf);

// !Объект со свойствами с пробелами
// let description = {
//   work: "Пошел на работу",
//   "трогал дерево": "Потрогал дерево",
//   age: 21
// };
// !удаление свойств
// delete description.work
// console.log(description);
// !проверка на содержание свойства в объекте 
// console.log("трогал дерево" in description);
// !вызов свойств объекта
// console.log(Object.keys({work: "Пошел на работу","трогал дерево": "Потрогал дерево",age: 21}));
//!копирование объектов с изменением его свойств(т.о. массив частный случай объекта для хранения последовательностей)
// Object.assign(description,{b:3, work:"не пошел"});
// console.log(description);

//!к вопросу об изменяемости объектов, переменные 1 и 2 имеют одинаковую идентичность
// let object1 = {value: 10};
// let object2 = object1;
// let object3 = {value: 10};
// console.log(object1 == object2);
// console.log(object1 == object3);
//!изменение свойств объекта
// object1.value = 15
// console.log(object1.value);

//!Журнал Жака, добавление записей
// let journal =[
//   {events:["ел мюсли","работал","трогал дерево","ел пиццу"],
//   squirrel: false},
//   {events:["ел орехи","работал","трогал дерево","чистил зубы"],
//   squirrel: false},
//   {events:["ел орехи","работал","трогал дерево","ел пиццу"],
//   squirrel: true},
//   {events:["ел орехи","работал","трогал дерево","ел пиццу"],
//   squirrel: true}
// ];
//!т.о. можно явно не задавая как называются свойства, функция будет брать их из имени переменной
// function addEntry(events,squirrel){
//   journal.push({events,squirrel});
// };
// addEntry(["трогал дерево","ел пиццу"],false);
// console.log(journal);

//!Функция для вычисления коррекляции
// function phi(table){
//   return(table[3]*table[0]-table[2]*table[1])/Math.sqrt((table[2]+table[3])*(table[0]+table[1])*(table[1]+table[3])*(table[0]+table[2]));
// };
// console.log(phi([76,9,4,1]));

//!Функция для подсчета количества событий по отоношению к превращению в белку(include - проверяет сущестует ли в массиве заданное значение)
// function tableFor(event,journal){
//   let table = [0,0,0,0];
//   for (let i = 0; i < journal.length; i++) {
//     let entry = journal[i], index = 0;
//     if (entry.events.includes(event)) index += 1;
//     if (entry.squirrel) index += 2;
//     table[index] += 1;
//   }
//   return table;0
// };

// console.log(tableFor("ел орехи",journal))
// console.log(phi(tableFor("ел орехи",journal)));

//!Перебор массива в цикле более изящным способом
// for (let entry of journal) {
//   console.log(`${entry.events.length} событий.`);
// };

//! найдем все типы событий
// function journalEvents(journal){
//   let events = [];
//   for (let entry of journal){
//     for (let event of entry.events) {
//       if (!events.includes(event)){
//         events.push(event);
//       };
//     };
//   };
//   return events;
// };

//! Все возможные события
// console.log(journalEvents(journal));

//!расчитаем корреляцию для каждого из возможных событий
// for (let event of journalEvents(journal)){
//   console.log(event + ":", phi(tableFor(event, journal)));
// }

//!Выведем наиболее значимые корреляции
// for (let event of journalEvents(journal)){
//   let corelation = phi(tableFor(event,journal));
//   if (corelation > 0.1 || corelation < -0.1){
//     console.log(event + ":", corelation);
//   };
// };
//!Добавим к событиям в которых жак ел орехи и не чистил зубы
// for (let entry of journal){
//   if (entry.events.includes("ел орехи") && !entry.events.includes("чистил зубы")){
//     entry.events.push("арахис-зубы");
//   };
// };
//!убедимся что кореляция для таких событий равна 1
// console.log(phi(tableFor("арахис-зубы",journal)));

//*Работа с методами и свойствами массивами
//!unshift и shift добавление элемента и его удаление с начала списка
// let todoList = ["Съесть роллов", "Съесть пиццы", "Пропылесосить", "Вытереть пыль", "Сделать пык-пык"];
// function remember(task){
//   todoList.push(task);
// };
// function getTask(){
//   return todoList.shift();
// };
// function rememberUrgently(task){
//   todoList.unshift(task);
// };
// remember("покормить хомяка");
// getTask();
// rememberUrgently("поспать");
// console.log(todoList);

//!Поиск индекса по значению с начала и с конца, можно задать необязательный второй аргумент, который указывает с какого элемента начать
// console.log([1,2,3,4,1,2,3,4].indexOf(2,3));
// console.log([1,2,3,4,1,2,3,4].lastIndexOf(2));

//!Срезы массивов slice, если не писать аргументы, то можно получить копию(я так понял, что независящую)
// console.log([1,2,3,4,1,2,3,4].slice(2,4));
// console.log([1,2,3,4,1,2,3,4].slice(2));
// console.log([1,2,3,4,1,2,3,4].slice());

//! Склеивание массивов concat, функция удаляет значение по индексу из массива
// function remove(array, index){
//   return array.slice(0,index).concat(array.slice(index+1))
// }
// console.log(remove([1,2,3,4,5,6]),2);

//!Строки и их свойства, добавить новые свойства не получится,так как они неявляются объектами; к ним можно применить методы slice, indexOf, trim, padStart, split, join, repeat, length
// let kim = "Ким";
// kim.age = 88;
// console.log(kim.age);
// console.log("кокосы".slice(3,6));
// console.log("кокос".indexOf("ос"));
// console.log("   jer    \n".trim());
// console.log(String(6).padStart(6, "0"));
// console.log("Птицы-секретари умеют громко топать".split(" "));
// console.log("Птицы-секретари умеют громко топать".split(" ").join(". "));
// console.log("ЛА".repeat(3));

//!Дополнительные параметры, т.е. можно задать для функции бесконечно много параметров. Развертка массива внутри функции
// function max(...numbers){
//   let result = -Infinity;
//   for (let number of numbers){
//     if (number > result) result = number;
//   }
//   return result;
// }
// let numbers = [4,12,432,432,-23];
// console.log(max(23,...numbers,4323))
let words = ["плюшка","и"];
console.log(["Ксюша",...words,"киска","одновременно"].join(" "))

//!Объект Math - пространство имен
console.log(Math.random());



