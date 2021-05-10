// Lesson 6
//                            [Array Methods]

// Sort method
// ..........................1.Sort Method............................


let numbers = [1, 6, 9, 0, 17, 22, 99];
// let names = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
// let arrInArr = [1.2, 5, [8, 0, [9, 1], 8, 99, [0, 4, false, [8, [8, 8, [9, 9, [0, 0]]], 0, 1]]]];
//
// let numbers1 = names.sort((a, b) => {
//   console.log(a, 'A');
//   console.log(b, 'B');
//   console.log('_________________________');
//   return a - b;
// });
// console.log(numbers1);


// let names1 = names.sort((a, b) => {
//   if (a < b) {
//     return 1
//   }
//
//   return -1
// });
//
// console.log(names1);


// let users = [
//     {name: 'Dima', age: 10},
//     {name: 'Nastya', age: 27},
//     {name: 'Volodymyr', age: 19},
//     {name: 'Yevgen', age: 14},
//     {name: 'Taras', age: 44},
// ];
// let sortU = users.sort((a, b) =>{
//    return a.age - b.age
// });
// console.log(sortU);


//.......................2.Filtration method 27:00:00.................

// let numbers = [1, 6, 9, 56, 17, 22, 99];
// let filter = numbers.filter((value ) =>{
//     return value > 22;
// })

// let x = numbers.filter(value => value >22);
// console.log(numbers);
// or
// let filter = numbers.filter(value => value > 15);
// console.log(filter);


// let numbers1 = numbers.filter((value) => {
//   console.log(value);
//
//   return value % 2 === 0;
// });
//
// console.log(numbers1);

// let strings = strs.filter(name => name.length > 5);
//
// console.log(strings);

//.......................3.ForEach method 35:00:00.....................

// ForEach is a new type of Cycle, like [for of]
//  let numbers = [2, 5, 1, 11, 28, 3, 88, 91, 975, 11778];
// numbers.forEach((value, index) => {
//   if (value % 2) {
//     return;
//   }
//
//   console.log(value, index);
//   console.log('_______________________');
// });
// console.log(numbers);

//.......................4.Map method 40:00:00....................
// map - vudozminye massuv i povertae nazad.

let users = [
  { name: 'Dima', age: 10 },
  { name: 'Nastya', age: 22 },
  { name: 'Volodya', age: 19 },
  { name: 'Yarko', age: 39 },
  { name: 'Yevhen', age: 14 },
  { name: 'Taras', age: 4 }
];
// let map = users.map((value, index) =>{
//     if(!(index % 2)) {
//         value.age = value.age * index;
//
//         return value;
//     }
// });
//
// console.log(map);
// console.log(users);


// let map = numbers.map((value, index) => {
//   if (index % 2 === 0) {
//     return value * index
//   }
//
//   return value
// });
// console.log(map);


// let usersWithId = users.map((name, index) => {
//   return {
//     id: index + 1,
//     name
//   }
// });
// console.log(usersWithId);
// console.log(users);


// let users = [
//   { name: 'Viktor', car: true },
//   { name: 'Fima', car: false },
//   { name: 'Olga', car: true },
// ]
// let map = users.map(user => {
//   user.age = 22;
//
//   return user;
// });
// console.log(map);


// ......................5.Find method 52:00:00....................

// let names = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
// let girl = names.find((value, index, obj) => {
//     return value.startsWith('A');
// });


// let names = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
// let girl = names.find((value, index, obj => value.startsWith('A'));
// // or this short variant below!
// let girl = names.find(value => value.startsWith('A'));
// let girl1 = names.find(value => value.includes('a'));
// console.log(girl);
// console.log(girl1);


// ......................6.Find index method 55:00:00....................

// let names = ['Dima', 'Sergio', 'Tania', 'Igor', 'Andrew', 'Stepan'];
// let tName = names.find(name => name.startsWith('S'));
// let findIndex = names.findIndex(name => name.includes('x'));
//
// console.log(tName);
// console.log(findIndex);

// ......................7.Reverse method 59:00:00....................

// let numbers = [2, 5, 1, 11, 28, 3, 88, 91, 975, 11778];
// let numbers1 = numbers.reverse();
// // result: [11778, 975, 91, 88, 3, 28, 11, 1, 5, 2]
// console.log(numbers1);



// ......................8.Some /Every   59:00:00.....................

// let numbers = [2, 5, 1, 11, 28, 3, 88, 91, 97, 11];
// let some = numbers.some(number => number > 100);
// let every = numbers.every(number => number > 100);
//
// console.log(some, 'SOME');
// console.log(every, 'EVERY');


// ......................9.Flat....59:00:00............................
// Zrobutu odnorivnevuy masuv

// let arr = [[1, 3,[8], 77], 12 , [8,9], [[[[7, 9, 1]], 'hello']], 2];
// let flat = arr.flat( 7);
// console.log(flat);


// console.log(arrInArr);
// let flat = arrInArr.flat(3);
// console.log(flat);
// let map = numbers.map((number, i) => number * i);
// console.log(map);


// ......................10.Reduce...1:14:00..........................
// Reduce -

let numbers = [2, 5, 1, 11, 28, 3, 88, 91, 97, 11];

let number = numbers.reduce((acc, currentValue) => {
  console.log(acc);
  console.log(currentValue);
  console.log('_____________________________');

  return acc + currentValue;
});
console.log(number);



// let users = [
//   { name: 'Dima', age: 10 },
//   { name: 'Nastya', age: 22 },
//   { name: 'Volodya', age: 19 },
//   { name: 'Yarko', age: 39 },
//   { name: 'Yevhen', age: 14 },
//   { name: 'Taras', age: 44 }
// ];
//
// let reduce = users.reduce((acc, value) =>{
//     console.log(acc, 'ACC');
//     console.log(value, 'VALUE');
//     console.log('_________________');
//     return acc.age + value.age;
//
// }, 0);
// console.log(reduce);


//we added to array users new value car - true if age > 18.


// let oldUsers = users.filter(value => value.age > 18);
// oldUsers.map(user => {
//     user.car = true;
//
//     return user;
// })
// console.log(oldUsers);
// result:0: {name: "Nastya", age: 22, car: true}
// 1: {name: "Volodya", age: 19, car: true}
// 2: {name: "Yarko", age: 39, car: true}
// 3: {name: "Taras", age: 44, car: true}
//
// console.log(users);
// return:
// 0: {name: "Dima", age: 10}
// 1: {name: "Nastya", age: 22, car: true}
// 2: {name: "Volodya", age: 19, car: true}
// 3: {name: "Yarko", age: 39, car: true}
// 4: {name: "Yevhen", age: 14}
// 5: {name: "Taras", age: 44, car: true}


// Ce dizpec! Reduce - repeat.

// let users = [
//   { name: 'Dima', age: 10 },
//   { name: 'Nastya', age: 22 },
//   { name: 'Volodya', age: 19 },
//   { name: 'Yarko', age: 39 },
//   { name: 'Yevhen', age: 14 },
//   { name: 'Taras', age: 44 }
// ];
// //Try do the same with reduce method!
// let oldUsers = users.reduce((acc, value) =>{
//     if (value.age > 18){
//         value.car = true;
//         acc.push(value);
//     }
//     return acc;
// }, []);
// console.log(oldUsers);



// ......................11.Splice...1:51:00..........................

// let users = [
//   { name: 'Dima', age: 10 },
//   { name: 'Nastya', age: 22 },
//   { name: 'Volodya', age: 19 },
//   { name: 'Yarko', age: 39 },
//   { name: 'Yevhen', age: 14 },
//   { name: 'Taras', age: 44 }
// ];
// let numbers = [2, 5, 1, 11, 28, 3, 88, 91, 97, 11];
// numbers.splice(4, 3, users[0]);
// console.log(numbers);

// ......................12.Prototype...2:01:00..........................

//Here you fill in function Konstructor 1.
// function Animal(name, color) {
//   this.name = name;
//   this.color = color;
//
//   // this.run = function (){
//   //   console.log('run');
//   // }
// }
//
// // Here you added instead function() new prototype
// Animal.prototype.run = function()  {
//   console.log('run');
// }
//
// //Here you fill in function Konstructor 2.
// function Hamster(name, color, house) {
//   this.name = name;
//   this.color = color;
//   this.house = house;
// }
//
// // Choose which method of 3 available you want to use:
// // First method below
// // Hamster.prototype = Animal.prototype;
//
// //Second method below
// // Hamster.prototype.__proto__ = Animal.protoype;
//
// //Third method below
// Hamster.prototype = Object.create(Animal.prototype);
//
//
// Hamster.prototype.run = function(){
//   console.log(2222);
// }
//
// let xx = new Animal('xx', 'white');
// let busya  = new Hamster('Busya', 'white')
//
// xx.run();
// busya.run();

// Example.2

// function Hamster(name){
//   this.name = name;
//   this.stomach = [];
//
// }

// Hamster.prototype.stomach = [];
// Hamster.prototype.name = '';

// Hamster.prototype.findFood = function(eat){
//   this.stomach.push(eat);
// }
//
// let ernest = new Hamster('Ernest');
// let morkva = new Hamster('Morkva');
//
// morkva.findFood('Apple');
// morkva.findFood('Peer');
//
// console.log(ernest.stomach);
// console.log(morkva.stomach);













// Reduce
// let reduce = users.reduce((acc, currentValue) => {
//   console.log(acc);
//   console.log(currentValue);
//   console.log('_____________________');
//
//   return acc + currentValue.age;
// }, 0);
//
// console.log(reduce);
//
// users.reduce((acc, value) => {
//   if (value.age > 18) {
//     value.car = true;
//
//     acc.push(value);
//   }
//
//   console.log(acc);
//   return acc;
// }, []);