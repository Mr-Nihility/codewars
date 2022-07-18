// Jaden Smith, the son of Will Smith, is the star of films such as The Karate Kid (2010) and After Earth (2013). Jaden is also known for some of his philosophy that he delivers via Twitter. When writing on Twitter, he is known for almost always capitalizing every word. For simplicity, you'll have to capitalize each word, check out how contractions are expected to be in the example below.

// Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

// Example:

// Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
// Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes Aren't Real"

// String.prototype.toJadenCase = function () {
//   //...
//   return this.split(" ")
//     .map((x) => {
//       let newWord = x[0].toUpperCase() + x.slice(1);
//       return newWord;
//     })
//     .join(" ");
// };

// let str = "How can mirrors be real if our eyes aren't real";
// console.log(str.toJadenCase());

// // console.dir(String);

//2
// Task
// Given the numbers of blocks available, return an array / tuple or another data structure depending on the language (refer sample tests) with the heights of 2nd, 1st, 3rd places platforms.

// Examples (input -> output)
// 11 ->   [4, 5, 2]
// 6  ->   [2, 3, 1]
// 10 ->   [4, 5, 1]

// function racePodium(blocks) {
//   // your code here
//   let firstPlace = Math.ceil(blocks / 3) + 1;
//   let secondPlace = firstPlace - 1;

//   let thirdPlace = blocks - (firstPlace + secondPlace);
//   if (!thirdPlace) {
//     thirdPlace += 1;
//     secondPlace -= 1;
//   }
//   return [secondPlace, firstPlace, thirdPlace];
// }

// console.log(racePodium(11), "11"); //(11, [4, 5, 2]);
// console.log(racePodium(6), "6"); //(6, [2, 3, 1]);
// console.log(racePodium(10), "10"); //(10, [4, 5, 1]);
// console.log(racePodium(100000)); //(100000, [33334, 33335, 33331]);
// console.log(racePodium(7), "7"); //(7, [2, 4, 1]);
// console.log(racePodium(8), "8"); //(8, [3, 4, 1]);

//3

// Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

// Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

// If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

// Examples
// "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
// "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
// ""  -->  ""

// function order(words) {
//   if (words === "") {
//     return "";
//   }
//   const arr = words.split(" ");
//   const newArr = [];

//   for (let i = 1; i <= arr.length; i++) {
//     const searchEl = arr.find((a) => a.includes(i));
//     newArr.push(searchEl);
//   }
//   return newArr;
// }

// console.log(order("is2 Thi1s T4est 3a")); // "Thi1s is2 3a T4est"
// console.log(order("4of Fo1r pe6ople g3ood th5e the2")); //"Fo1r the2 g3ood 4of th5e pe6ople"

// console.log(order("")); // ''-> '' ,"empty input should return empty string"

//4 (6куев)
// Funny Dots
// You will get two integers n (width) and m (height) and your task is to draw the following pattern. Each line is seperated with a newline (\n)

// Both integers are equal or greater than 1; no need to check for invalid parameters.

// Examples

//                                             +---+---+---+
//              +---+                          | o | o | o |
// dot(1, 1) => | o |            dot(3, 2) =>  +---+---+---+
//              +---+                          | o | o | o |
//                                             +---+---+---+
// function dot(n, m) {
//   let upperStr = "";
//   let bodyStr = "";
//   //width
//   for (let i = 0; i < n; i += 1) {
//     upperStr += "---+";
//     bodyStr += " o |";
//   }

//   let w = `+${upperStr}\n|${bodyStr}\n`;
//   let res = "";
//   //heigth
//   for (let j = 0; j < m; j++) {
//     res += w;
//   }

//   return `${res}+${upperStr}`;
// }
// console.log(dot(1, 1));

// console.log(dot(3, 2));
// console.log(dot(14, 7));
``;

//                                      00-00..00-00
//                               0000--0000....0000--0000
//                         000000---000000......000000---000000
//                    00000000----00000000........00000000----00000000
//             0000000000-----0000000000..........0000000000-----0000000000
//       000000000000------000000000000............000000000000------000000000000
// 00000000000000-------00000000000000..............00000000000000-------00000000000000

//5 (8kuy)
// If you can't sleep, just count sheep!!

// Task:
// Given a non - negative integer, 3 for example,
//  return a string with a murmur: "1 sheep...2 sheep...3 sheep...".Input will always be valid, i.e.no negative integers.

// var countSheep = function (num) {
//   let res = "";
//   for (let i = 1; i <= num; i++) {
//     res += `${i} sheep...`;
//   }

//   return res ? res : "";
//   //your code here
// };

// console.log(countSheep(0));
// console.log(countSheep(3)); //

//6 (5kyi)
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0

// function moveZeros(arr) {
//   let cutArr = [];
//   for (let i = 0; i <= arr.length; i++) {
//     if (arr[i] === 0) {
//       let cut = arr.splice(i, 1);
//       cutArr.push(...cut);
//       // i--;
//     }
//   }

//   return arr.concat(cutArr);
// }

// console.log(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])); // [1, 2, 1, 1, 3, 1, 0, 0, 0, 0]
// console.log(
//   moveZeros([9, 0, 9, 1, 2, 1, 1, 3, 1, 9, 0, 0, 9, 0, 0, 0, 0, 0, 0, 0])
// );
