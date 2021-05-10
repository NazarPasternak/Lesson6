// 1) Створити масив з 20 чисел та:

// let numberArr = [2, 4, 45, 78, 77, 6, 7, 9, 0, 5, 45, 56, 98, 11, 33, 22, 45, 111, 177, 7];

//  a) відсортувати його від меншого до більшого. Use =  .sort(())
// let numberArr = [2, 4, 45, 78, 77, 6, 7, 9, 0, 5, 45, 56, 98, 11, 33, 22, 45, 111, 177, 7]
//
// let newArr = numberArr.sort((a,b) =>{
//     return a-b;
// });
// console.log(newArr);

//  b) відсортувати його від більшого до меншого.
// let numberArr = [2, 4, 45, 78, 77, 6, 7, 9, 0, 5, 45, 56, 98, 11, 33, 22, 45, 111, 177, 7]
// let newArr = numberArr.sort((a,b)=>{
//     return b-a;
// })
// console.log(newArr);

//  c) Відфілтрувати числа які є кратними 3.
// let numberArr = [2, 4, 45, 78, 77, 6, 7, 9, 0, 5, 45, 56, 98, 11, 33, 22, 45, 111, 177, 7];
//
// let newArr = numberArr.filter((value)=>{
//     if(value % 3===0){
//         return value
//     }
// });
// console.log(newArr);
// // or short
// // console.log(numberArr.filter(value => !(value%3)));

//  d) Відфілтрувати числа які є більшими за 10.
// let newArr = numberArr.filter((value)=>{
//     return value > 10
// });
// console.log(newArr);
// // or short variant!
// // console.log(numberArr.filter(value => value >10));

//  e) Question????
//  Проітерувати його forEach та вивести кожеш елмент за допомогою document.write
// // numberArr.forEach(element => console.log(element));
//
// let newArr = numberArr.forEach(value =>{
//     console.log(newArr)
// });

//  f) За допомогою map збільшити кожен елемент в масиві в три рази.
// let newArr = numberArr.map((value,index)=>{
//     return value * 3
// });
// console.log(newArr);
// // or
// // console.log(numberArr.map(x => x * 3));

//  g) Порахувати загальну суму всіх елментів у масиві (reduce)
// let newArr = numberArr.reduce((acc, value)=>{
//     return acc + value
// });
// console.log(newArr);


// 2) Створити масив з 20 стрічок та:

// string = ['Vasya','Petya','Kolya','Olya','Max','Anya','Oleg',
//     'Andrey','Masha','Alla','Nika','Danya','Alena','Sasha','Chris'
//     ,'Bob','Methuph','John','Marian',]

//  a) Question???! Відсортувати його в алфавітному порядку
//
// let x = string.sort((a, b)=>{
//     let nameA = a.toUpperCase();
//     let nameB = b.toUpperCase();
//     if(nameA < nameB) {
//         return -1;
//     }
//     if(nameA > nameB) {
//         return 1;
//     }
//     return 0;
// });
// console.log(x);

//  b) Відсортувати в зворотньому порядку
// let x = string.sort((a, b)=>{
//     let nameA = a.toUpperCase();
//     let nameB = b.toUpperCase();
//     if(nameA < nameB) {
//         return 1;
//     }
//     if(nameA > nameB) {
//         return -1;
//     }
//     return 0;
// });
// console.log(x);

//  c) Отримати в новому масиві тільки ті слова, довжина яких більша
//     за 4 букви (filter)
//
// let newArr = string.filter((x ) =>{
//     if(x.length > 4 ){
//         return x;
//     };
// });
// console.log(newArr);

// d) Змінити кожне слово в масиві додавши на початок
// 'Sam says *ваше слово*'.
// let newString = string.map((value) => {
//     return 'Sam says' + value;
// });
// console.log(newString);

//Question???This variant doesnt work, why?do the same with For Each.
//  let newString = string.forEach((value,i, array) => {
//     array[i] = `Sam says ${value}`});
// console.log(newString);

// 3) Все робити тільки за допомогою методів масивів!
// Дано масив :
// const users = [
//    {name: 'vasya', age: 31, isMarried: false},
//    {name: 'petya', age: 30, isMarried: true},
//    {name: 'kolya', age: 29, isMarried: true},
//    {name: 'olya', age: 28, isMarried: false},
//    {name: 'max', age: 30, isMarried: true},
//    {name: 'anya', age: 31, isMarried: false},
//    {name: 'oleg', age: 28, isMarried: false},
//    {name: 'andrey', age: 29, isMarried: true},
//    {name: 'masha', age: 30, isMarried: true},
//    {name: 'olya', age: 31, isMarried: false},
//    {name: 'max', age: 31, isMarried: true}
// ];

// a) відсортувати його за  віком (зростання , а потім окремо спадання)
// let newAge = users.sort((a, b) =>{
//     if(a.age > b.age){
//         return 1
//     }
//     if (a.age < b.age) {
//         return -1
//     }
// });
// console.log(newAge);

// Opposite side age!
// let newAge = users.sort((a, b) =>{
//     if(a.age > b.age){
//         return -1
//     }
//     if (a.age < b.age) {
//         return 1
//     }
// });
// console.log(newAge);

// b) відсортувати його за кількістю знаків в імені  (зростання ,
// а потім окремо спадання).
// let numbersName = users.sort((a, b,)=> {
//     let A = a.name.length
//     let B = b.name.length
//     if (A > B){
//         return -1;
//     }
//     if (B - A) {
//         return 1;
//     }
// });
// console.log(numbersName);
//
// // let numbersName = users.sort( (a, b)=> a.name.length -b.name.length)
// // console.log(users);
// // let numbersName = users.sort( (a, b)=> b.name.length -a.name.length)
// // console.log(users);
//
// let numbersName = users.sort((a, b,)=> {
//     let A = a.name.length
//     let B = b.name.length
//     if (A > B){
//         return 1;
//     }
//     if (B - A) {
//         return -1;
//     }
// });
// console.log(numbersName);

// c) Question? why we need x?  пройтись по ньому та додати кожному юзеру поле id - яке характеризує
// унікальний індентифікатор (По якому принципу його створювати - ваше рішення),
// та зберегти це в новий масив (первинний масив залишиться без змін)
// let newArr = users.map((x,i) => {
//     const{ name, age, isMarried} = x;
//     return {name, age, isMarried, id : i + 1};
// });
// console.log(users);
// console.log(newArr);

// d) відсортувати його за індентифікатором
//
// let newArr = users.map((x,i) => {
//     const{name, age, isMarried} = x;
//     return {name, age, isMarried, id : i + 1};
// });
// console.log(newArr.sort((a,b)=> a.id -b.id));

// e) Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce);
// const newArr = users.reduce((acc,value)=>{
//     if(value.isMarried = true){
//         return acc
//     }
// });
// console.log(newArr);

// e) Question HARD??????
// Всі хто одружений мають попасти у новий масив та отрмати квартиру (reduce);
// const cloneUsers = users.reduce((acc, user)=>
//     user.isMarried ? [...acc, {...user, hasHouse: true}] : acc, []);
// console.log(cloneUsers);



// ______________________________________________________________________________________________________________________________________________________
//                                                                 РОБОТА В АУДИТОРІЇ
// ______________________________________________________________________________________________________________________________________________________


// const cars = [
//    {producer:"subaru",model: "wrx",year: 2010, color:"blue",type: "sedan",engine: "ej204x",volume: 2,power: 400},
//    {producer:"subaru",model: "legacy",year: 2007, color:"silver",type: "sedan",engine: "ez30",volume: 3,power: 250},
//    {producer:"subaru",model: "tribeca",year: 2011, color:"white",type: "jeep",engine: "ej20",volume: 2,power: 300},
//    {producer:"subaru",model: "leone",year: 1998, color:"yellow",type: "sedan",engine: "ez20x",volume: 2,power: 140},
//    {producer:"subaru",model: "impreza",year: 2014, color:"red",type: "sedan",engine: "ej204x",volume: 2,power: 200},
//    {producer:"subaru",model: "outback",year: 2014, color:"red",type: "hachback",engine: "ej204",volume: 2,power: 165},
//    {producer:"bmw",model: "115",year: 2013, color:"red",type: "hachback",engine: "f15",volume: 1.5,power: 120},
//    {producer:"bmw",model: "315",year: 2010, color:"white",type: "sedan",engine: "f15",volume: 1.5, power: 120},
//    {producer:"bmw",model: "650",year: 2009, color:"black",type: "coupe",engine: "f60",volume: 6,power: 350},
//    {producer:"bmw",model: "320",year: 2012, color:"red",type: "sedan",engine: "f20",volume: 2,power: 180},
//    {producer:"mercedes",model: "e200",year: 1990, color:"silver",type: "sedan",engine: "eng200",volume: 2,power: 180},
//    {producer:"mercedes",model: "e63",year: 2017, color:"yellow",type: "sedan",engine: "amg63",volume:3,power: 400},
//    {producer:"mercedes",model: "c250",year: 2017, color:"red",type: "sedan",engine: "eng25",volume: 2.5,power: 230}
// ];

// Відфільтрувати масив за наступними крітеріями :
// - двигун більше 3х літрів
// const engineMore3 = cars.filter((item) => item.volume >= 3);
// console.log(engineMore3);


// - двигун = 2л
// const engineM2 = cars.filter((item) => item.volume === 2);
// console.log(engineM2);


// - QUSTION WHAT IS (....)
// виробник мерс
// const carsMers = cars.reduce((acc, user)=>
//     user.producer ? [...acc, {...car, hasHouse: true}] : acc, []);
// console.log(cloneUsers);


// const cloneUsers = users.reduce((acc, user)=>
//     user.isMarried ? [...acc, {...user, hasHouse: true}] : acc, []);
// console.log(cloneUsers);


// const manufactureMers = cars.forEach((value)=>{
//    if (value === producer.mercedes){
//       return value
//    }
// })
// console.log(anufactureMers);



// - NO ANSWER двигун більше 3х літрів + виробник мерседес

// - NO ANSWER двигун більше 3х літрів + виробник субару

// - NO ANSWER сили більше ніж 300

// - NO ANSWER сили більше ніж 300 + виробник субару
// - NO ANSWER мотор серіі ej
// - NO ANSWER сили більше ніж 300 + виробник субару + мотор серіі ej
// - NO ANSWER двигун меньше 3х літрів + виробник мерседес
// - NO ANSWER двигун більше 2л + сили більше 250
// - NO ANSWER сили більше 250  + виробник бмв

// - взять слдующий массив

// const usersWithAddress = [
//    {id: 9, name: 'vasya', age: 31, isMarried: false, address: {city: 'Kyiv', street: 'Gongadze', number: 16}},
//    {id: 2, name: 'petya', age: 30, isMarried: true, address: {city: 'Rivne', street: 'Zelena', number: 1}},
//    {id: 4, name: 'kolya', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Pasichna', number: 121}},
//    {id: 3, name: 'olya', age: 28, isMarried: false, address: {city: 'Rivne', street: 'Shevchenko', number: 90}},
//    {id: 8, name: 'max', age: 30, isMarried: true, address: {city: 'Lviv', street: 'Kriva Lipa', number: 115}},
//    {id: 6, name: 'anya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Shevchenko', number: 2}},
//    {id: 10, name: 'oleg', age: 28, isMarried: false, address: {city: 'Kyiv', street: 'Centralna', number: 22}},
//    {id: 5, name: 'andrey', age: 29, isMarried: true, address: {city: 'Lviv', street: 'Gorodotska', number: 43}},
//    {id: 1, name: 'masha', age: 30, isMarried: true, address: {city: 'Kyiv', street: 'Peremogi', number: 12}},
//    {id: 7, name: 'olya', age: 31, isMarried: false, address: {city: 'Lviv', street: 'Naukova', number: 16}},
//    {id: 11, name: 'max', age: 31, isMarried: true, address: {city: 'Rivne', street: 'Ivana Franka', number: 121}}
// ];

// -- Відсортувати їх по ID
// const idSort = usersWithAddress.sort((a, b)=>{
//    if (a.id >b.id){
//       return 1
//    }
//    if (a.id < b.id) {
//       return -1;
//    }
// });
// console.log(idSort);


// -- Відсортувати їх по ID в зворотньому порядку
// const idSortReverse = usersWithAddress.sort((a, b)=>{
//    if (a.id >b.id){
//       return -1
//    }
//    if (a.id < b.id) {
//       return 1;
//    }
// });
// console.log(idSortReverse);


// -- Відсортувати по віку
// const ageSort = usersWithAddress.sort((a ,b)=>{
//    if (a.age > b.age){
//       return 1;
//    }
//    if (a.age < b.age){
//       return -1;
//    }
// });
// console.log(ageSort);


// -- Відсортувати по віку в зворотньому порядку
// const ageSortReverse = usersWithAddress.sort((a ,b)=>{
//    if (a.age > b.age){
//       return -1;
//    }
//    if (a.age < b.age){
//       return 1;
//    }
// });
// console.log(ageSortReverse);


// -- Відсорутвати по імені
// const nameSort = usersWithAddress.sort((a ,b)=>{
//    if (a.name > b.name){
//       return 1;
//    }
//    if (a.name < b.name){
//       return -1;
//    }
// });
// console.log(nameSort);


// -- Відсорутвати по назві вулиці
// const nameStreet = usersWithAddress.sort((a ,b)=>{
//    let nameA = a.address.street;
//    let nameB = b.address.street;
//
//    if (nameA > nameB){
//       return 1;
//    }
//    if (nameA < nameB){
//       return -1;
//    }
// });
// console.log(nameStreet);


// -- Відсорутвати по номеру будинку
// const numberSort = usersWithAddress.sort((a ,b)=>{
//    let nameA = a.address.number;
//    let nameB = b.address.number;
//
//    if (nameA > nameB){
//       return 1;
//    }
//    if (nameA < nameB){
//       return -1;
//    }
// });
// console.log(numberSort);

// ............FILTER

// -- Залигити тільки тих, хто молодший ніж 30 (filter)
// const ageYounger = usersWithAddress.filter((item) => item.age <= 30);
// console.log(ageYounger);


// -- Залишити тільки одружених
// const married = usersWithAddress.filter((item) => item.isMarried === true);
// console.log(married);


// -- Залишити тільки одружених, які молодні за 30
// const marriedAndAgeYoung = usersWithAddress.filter((item) => item.isMarried === true && item.age <= 30);
// console.log(marriedAndAgeYoung);


// -- Question???Залишити лише тих, в кого парні номери будинків.
// const numberParny = usersWithAddress.filter((value)=> {
//    if(value % 2) {
//       return address.number
//    }
// });
// console.log(numberParny);


// -- Question??? What to do?
// Порахувати загальний вік всіх людей. (reduce)
const totalAge = usersWithAddress.reduce((acc, value)=> {
   return acc.age + value.age
});
console.log(totalAge)


// NO ANSWER Ті, хто одружений і старий за 30 має отримати обєкти child і попасти в новий масив (reduce)





// ______________________________________________________________________________________________________________________________________________________
//                                                                     Додатково
// ______________________________________________________________________________________________________________________________________________________
//
// Створити обєкт автомобіля з полями:
// Марка автомобля, потужність двигуна, власник, ціна, рік випуску.
// Власник автомобіля теж має бути обєкт, у якого є поля
// Імя, вік, стаж водіння.
// Створити не менше 7 та не більше 20 машинок.
// Для початку вкладіть всі наші створені автомобілі в масив cars.
// Зробили половину автопарку ремонт мотору, що збільшить потужність автомобілів на 10% (переприсвоєння змінної потужності).
// На відремонтовані автомобілі найняти нових водіїв (переприсвоїти змінну водій).
// Далі необхідно рати кожну другу машинку (цикл з кроком в 2), та робити їй підвищення потужності двигуна на 10% та ціну на 5%
// Після того зробити перевірку досвіду ВСІХ наших водіїв. Якщо досвід водія менший за 5 років, але його вік більший за 25,
// то необідно відправити його на курси підвищення кваліфікації, що збільшить йому досвід на 1 рік.
// Також спробуйте порахувати суму, яку потрібно потратити для покупки всіх цих авто в циклі
//
//
// Задача: дан отсортированный по возрастанию массив целых чисел.
// Необходимо вернуть наименьший и наибольший индекс заданного элемента.
// Входные данные: arr — массив целых чисел значения которых по модулю не больше 10. Размер массива не более 10 элементов.
// Вывод: наибольший и наименьший индекс в массиве заданного элемента. Если такого элемента нет в массиве, выведите -1.
//
// Пример:
// Arr = [1, 2, 3, 4, 4, 4, 4, 7, 7, 9, 14]
// 1. Key = 1
// Answer: MinIndex = 0, MaxIndex = 0.
// 2. Key = 4
// Answer: MinIndex = 3, MaxIndex = 6.
//
