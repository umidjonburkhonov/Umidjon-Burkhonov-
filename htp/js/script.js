"use scrict";



//const place = confirm ("are you here");
//console.log(place);

//const currentPlace = prompt ("Where are you?", "UMId    ");
//console.log(typeof currentPlace);

//const age = +prompt ("How old are you ?", "18");
//console.log( age + 10);

//const favouriteColor = [];
//favouriteColor[0] = prompt ("what is your favourite Color #1", "");
//favouriteColor[1] = prompt ("what is your favourite Color #2", "");
//favouriteColor[2] = prompt ("what is your favourite Color #3", "");
//favouriteColor[3] = prompt ("what is your favourite Color #4", "");
//console.log(typeof favouriteColor);

//const channel = prompt ("what is your favourite youtubber");
//console.log(`https:youtube.com ${channel}` );

//const user = "Umidjon";
//const userLastname = "BUrkhonov";
//const job = "Frontend Developer";

//console.log(`user name is ${user} heir lastname is ${userLastname}, he is ${job}`);

//let incr = 10 ;
//let decr = 10 ;

//console.log(incr++);
// console.log(decr--);

// const age = +prompt ("How old are you ?", "");

// if(age > 18) {
//     console.log("Welcome");
// }else {
//     console.log("no entry");
// }

// if(age > 25){
//     console.log("Horror fims");
// }else if (age > 18 && age < 25){
//     console.log("boyewik fims");
// }else {
//     console.log("Cartons");
// }

// age > 25 ?   console.log("Horror fims") : console.log("Cartons");

// const color = "salom";

// switch(color){
//     case "red":
//         console.log("stop");
//         break;
//     case "green":
//         console.log("Goo");
//         break;
//     case "yellow":
//         console.log("Slowly");
//         break;
//     default:
//         console.log("traffic jam");
//         break;
// }

// let num = 10;

// while (startNum <= 20){
//     console.log(startNum);
//     startNum++;
// }

// do{
//     console.log(startNum);
//     startNum++;
// } while(startNum <11);

// for (let i = 1; i <= 15; i++){
//   if (i === 8){
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// const user = "Umidjon Burkhonov";

// console.log(user.substr(8, 2));

// const theif = {
//   jacket: "black",
//   height: 1.7,
//   color: {
//     hair: "gray",
//     style: "curley",
//     how: {
//       bauch: "dick",
//       arm: "lang",
//       hande: "gros",
//     },
//   },
//   howOut: function () {
//     console.log("Fast with help doors");
//   },
// };

// theif.howOut();

// const { bauch, arm, hande } = theif.color.how;

// console.log(bauch);
// console.log(arm);
// console.log(hande);

// const {hair, style} = theif.color;

// const hair = theif.color.hair;
// const style = theif.color.style;

// console.log(hair);
// console.log(style);
// console.log(Object.keys(theif).length);

// for (let key in theif) {
//   if (typeof theif[key] === "object") {
//     for (let i in theif[key]) {
//       console.log(`Property ${i} has value ${theif[key][i]} `);
//     }
//   } else {
//     console.log(`Property ${key} has value ${theif[key]} `);
//   }
// }

// const arr = [2, 8, 78, 5, 6, 11, 15, 25];
// arr.sort((a,b)=> a-b);
// console.log(arr);

// function compareFn(a, b) {
//   return a - b;
// }

// arr[88] = 1;
// console.log(arr.length);

// arr.forEach(function (item, index, arr) {
//   console.log(`  ${index}:  ${item} into to arr: ${arr}`);
// });

// arr.pop();
// arr.push(7);
// arr.shift();
// arr.unshift(9);

// console.log(arr);

// for (let i = 1; i < arr.length; i++) {
//   console.log(arr[i - 1]);
// }

// for(let value of arr){
//     console.log(value);
// }

// const movies = prompt("what is your favourite movies?", "");
// const userMovies = movies.split(", ");
// userMovies.sort();
// console.log(userMovies.join("+  "));

// let x = 10;
// let y = x;

// y = y + 5;

// console.log(x);
// console.log(y);

// let isMarried = false;
// let isArray = isMarried;

// isArray = true;

// console.log(isMarried);
// console.log(isArray);

// const number = {
//   x: 10,
//   y: 5,
// };

// const newNumber = number;

// newNumber.x = 15;

// console.log(number);
// console.log(newNumber);

// function copyObj(obj) {
//   let objCopy = {};

//   for (let key in obj) {
//     objCopy[key] = obj[key];
//   }

//   return objCopy;
// }

// const numbers = {
//   x: 10,
//   y: 5,
//   z: {
//     a: 1,
//     b: 2,
//   },
// };

// const newNumbers = copyObj(numbers);

// newNumbers.x = 15;
// newNumbers.z.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const numbers = {

//   x: 10,
//   y: 5,
// };

// const addNumber = {
//   z: 15,
// };

// const allNumbers = Object.assign( numbers, addNumber);

// console.log(allNumbers);

// const arr = [1, 2, 3];
// const numbers = arr.slice();

// numbers[0] = "Umidjon";

// console.log(arr);
// console.log(numbers);

// // SPEAD

// const liverpool = ["salah", "Mane"];
// const manCity = ["Mahrez"];

// const mixPlayer = [...liverpool, ...manCity];

// console.log(mixPlayer);


