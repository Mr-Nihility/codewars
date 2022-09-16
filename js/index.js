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

// function pigIt(str) {
//   const arrFromStr = str.split(" ");
//   const newArr = [];
//   for (let i = 0; i < arrFromStr.length; i++) {
//     if (arrFromStr[i] === "!" || arrFromStr[i] === "?") {
//       newArr.push(arrFromStr[i]);
//       continue;
//     }
//     let elem = arrFromStr[i].split("");
//     const firstChar = elem.shift();
//     elem.push(firstChar);
//     elem = elem.join("") + "ay";
//     newArr.push(elem);
//   }
//   return newArr.join(" ");
// }

// console.log(pigIt("Pig latin is cool")); //, "igPay atinlay siay oolcay"
// console.log(pigIt("This is my string")); // 'hisTay siay ymay tringsay'
// console.log(pigIt("Hello world !"));

// function formatDuration(seconds) {
//   let s = seconds % 60;
//   let m = Number.parseInt(seconds / 60) % 60;
//   let h = Number.parseInt(seconds / 3600) % 24;
//   let d = Number.parseInt(seconds / 86400) % 365;
//   let y =
//     seconds / (86400 * 365) > 1
//       ? Number.parseInt(seconds / (86400 * 365)) % 365
//       : null;

//   let res = "";
//   if (s) {
//     s === 1 ? (res = `${s} second`) : (res = `${s} seconds`);
//   }
//   if (m) {
//     if (res) {
//       res.length > 11 ? (res = ", " + res) : (res = " and " + res);
//     }
//     m === 1 ? (res = `${m} minute` + res) : (res = `${m} minutes` + res);
//   }
//   if (h) {
//     if (res) {
//       res.length > 11 ? (res = ", " + res) : (res = " and " + res);
//     }

//     h === 1 ? (res = `${h} hour` + res) : (res = `${h} hours` + res);
//   }
//   if (d) {
//     if (res) {
//       res.length > 11 ? (res = ", " + res) : (res = " and " + res);
//     }
//     d === 1 ? (res = `${d} day` + res) : (res = `${d} days` + res);
//   }
//   if (y) {
//     if (res) {
//       res.length > 11 ? (res = ", " + res) : (res = " and " + res);
//     }
//     y === 1 ? (res = `${y} year` + res) : (res = `${y} years` + res);
//   }

//   if (res === "") {
//     res = "now";
//   }
//   return res;
// }

// console.log(formatDuration(1)); // "1 second");
// console.log(formatDuration(62)); // "1 minute and 2 seconds");
// console.log(formatDuration(120)); // "2 minutes");
// console.log(formatDuration(3600)); // "1 hour");
// console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds")
// console.log(formatDuration(36621));
// console.log(formatDuration(""));

// function solution(str) {
//   const arrFromStr = str.split("");
//   const res = [];
//   arrFromStr.forEach((el, i, arr) => {
//     if (i % 2 === 0) {
//       let str = [el, arr[i + 1] ? arr[i + 1] : "_"];
//       res.push(str);
//     }
//   });
//   return res.flat();
// }

// console.log(solution("abcdef")); // ["ab", "cd", "ef"];
// console.log(solution("abcdefg")); // ["ab", "cd", "ef", "g_"];
// console.log(solution("")); // []);

//  НЕ РЕШЕНО
// function nextPrime(n) {
//   n++;
//   for (let i = n; i >= 0; i++) {
//     if (i % i === 0 && i !== 1 && n === i) {
//       return i;
//     }

//     if (i > 100000) return;
//   }
// }

// console.log(nextPrime(0)); //, 2);
// console.log(nextPrime(1)); //, 2);
// console.log(nextPrime(2)); //, 3);
// console.log(nextPrime(3)); //, 5);
// console.log(nextPrime(5)); //, 7);
// console.log(nextPrime(11)); //, 13);
// console.log(nextPrime(17)); //, 19);
// console.log(nextPrime(2971)); //, 2999);

// function reverseWords(str) {
//   const arrFromStr = str
//     .split(" ")
//     .map((item) => item.split("").reverse().join(""))
//     .join(" ");
//   return arrFromStr;
// }

// console.log(reverseWords("The quick brown fox jumps over the lazy dog.")); //, 'ehT kciuq nworb xof spmuj revo eht yzal .god');
// console.log(reverseWords("apple")); //, 'elppa');
// console.log(reverseWords("a b c d")); //, 'a b c d');
// console.log(reverseWords("double  spaced  words")); //, 'elbuod  decaps  sdrow');

// DONE
// function rgb(r, g, b) {
//   // complete this function

//   let first =
//     (r < 0 && (0).toString(16)) ||
//     (r > 255 && (255).toString(16)) ||
//     r.toString(16);
//   let second =
//     (g < 0 && (0).toString(16)) ||
//     (g > 255 && (255).toString(16)) ||
//     g.toString(16);
//   let third =
//     (b < 0 && (0).toString(16)) ||
//     (b > 255 && (255).toString(16)) ||
//     b.toString(16);

//   return `${first.length === 1 ? "0" + first : first}${
//     second.length === 1 ? "0" + second : second
//   }${third.length === 1 ? "0" + third : third}`.toUpperCase();
// }

// console.log(rgb(0, 0, -20)); //, "000000";
// console.log(rgb(0, 0, 0)); //, "000000";
// console.log(rgb(300, 255, 255)); //, "FFFFFF";
// console.log(rgb(173, 255, 47)); //, "ADFF2F";
// console.log(rgb(199, 145, 7)); //, "ADFF2F";
// // 199,145,7

///DONE

// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

// Courtesy of projecteuler.net (Problem 1)

// function solution(number) {
//   let sum = 0;
//   for (let i = 1; i < number; i++) {
//     if (i % 3 === 0 || i % 5 === 0) {
//       sum += i;
//     }

//   }

//   return sum;
// }

// console.log(solution(20)); //23

///done
//
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.
// function getCount(str) {
//   let count = 0;
//   str.split("").forEach((el) => {
//     if (el === "a" || el === "e" || el === "i" || el === "o" || el === "u") {
//       count += 1;
//     }
//   });
//   return count;
// }

// console.log(getCount("abracadabra")); // , 5;

//DONE
// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.
// function squareSum(numbers) {
//   let sum = 0;
//   numbers.forEach((num) => {
//     sum += num ** 2;
//   });
//   return sum;
// }

// console.log(squareSum([1, 2])); //, 5);
// console.log(squareSum([0, 3, 4, 5])); //, 50);
// console.log(squareSum([])); //, 0);

/**
 * ЗДЕЛАНО
 * Story
YouTube had a like and a dislike button, which allowed users to express their opinions about particular content. It was set up in such a way that you cannot like and dislike a video at the same time. There are two other interesting rules to be noted about the interface: Pressing a button, which is already active, will undo your press. If you press the like button after pressing the dislike button, the like button overwrites the previous "Dislike" state. The same is true for the other way round.

Task
Create a function that takes in a list of button inputs and returns the final state.

Examples
likeOrDislike([Dislike]) => Dislike
likeOrDislike([Like,Like]) => Nothing
likeOrDislike([Dislike,Like]) => Like
likeOrDislike([Like,Dislike,Dislike]) => Nothing
Notes
If no button is currently active, return Nothing.
If the list is empty, return Nothing.
 */
// Like, Dislike, Nothing come from Preloaded

// function likeOrDislike(buttons) {
//   if (buttons.length === 0) {
//     return "Nothing";
//   } else if (buttons.length === 1) {
//     return buttons[0];
//   }
//   let res = buttons[0];
//   for (let i = 1; i < buttons.length; i++) {
//     if (res === buttons[i]) {
//       res = "Nothing";
//     } else {
//       res = buttons[i];
//     }
//   }
//   return res;
// }

// console.log(likeOrDislike(["Dislike"])); //, Dislike );
// console.log(likeOrDislike(["Like", "Like"])); //, Nothing );
// console.log(likeOrDislike(["Dislike", "Like"])); //, Like );
// console.log(likeOrDislike(["Like", "Dislike", "Dislike"])); //, Nothing );

// console.log(likeOrDislike(["Dislike", "Dislike"])); //, Nothing );
// console.log(likeOrDislike(["Like", "Like", "Like"])); //, Like );
// console.log(likeOrDislike(["Like", "Dislike"])); //, Dislike );
// console.log(likeOrDislike(["Dislike", "Like", "Dislike"])); //, Dislike );
// // console.log(
//   likeOrDislike([
//     "Like",
//     "Like",
//     "Dislike",
//     "Like",
//     "Like",
//     "Like",
//     "Like",
//     "Dislike",
//   ])
// ); //, Dislike );
// console.log(likeOrDislike([])); //, Nothing );

/**
 *
 * 
 * What's in a name?
..Or rather, what's a name in? For us, a particular string is where we are looking for a name.

Task
Write a function, taking two strings in parameter, that tests whether or not the first string contains all of the letters of the second string, in order.

The function should return true if that is the case, and else false. Letter comparison should be case-INsensitive.
 *
 *
 *
 *
 *
 *
 */
// function nameInStr(str, name) {
//   const nameCharsArr = name.split("");
//   const strArr = str.split("");
//   for (let i = 0; i < nameCharsArr.length; i++) {
//     const elName = nameCharsArr[i];

//     for (let j = 0; j < strArr.length; j++) {
//       console.log(strArr.lastIndexOf(elName) > j);
//       if (strArr.lastIndexOf(elName) > j) {
//       } else {
//         return false;
//       }
//       return true;
//     }
//   }
// }

// console.log(nameInStr("Across the rivers", "chris")); //, true);
// console.log(nameInStr("Next to a lake", "chris")); //, false);
// console.log(nameInStr("Under a sea", "chris")); //, false);
// console.log(nameInStr("A crew that boards the ship", "chris")); //, false);
// console.log(nameInStr("A live son", "Allison")); //, false);

//DONE
// function digitize(n) {
//   return [...String(n)].reverse();
// }
// console.log(digitize(35231)); //, [1, 3, 2, 5, 3]);
// console.log(digitize(0)); //, [0]);

//DONE
// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.
// function likes(names) {
//   let message = "";
//   if (!names.length) {
//     message += "no one likes this";
//   }
//   if (names.length === 1) {
//     message += names[0] + " likes this";
//   }
//   if (names.length > 1 && names.length <= 3) {
//     message += names.join(" and ") + " like this";
//   }
//   if (names.length === 3) {
//     message = message.replace(" and ", ", ");
//   }
//   if (names.length > 3) {
//     message +=
//       names.slice(0, 2).join(", ") +
//       ` and ${names.length - 2} others like this`;
//   }
//   return message;
// }

// console.log(likes([])); //, "no one likes this");
// console.log(likes(["Peter"])); //, "Peter likes this");
// console.log(likes(["Jacob", "Alex"])); //, "Jacob and Alex like this");
// console.log(likes(["Max", "John", "Mark"])); //,"Max, John and Mark like this"

// console.log(likes(["Alex", "Jacob", "Mark", "Max"])); //,"Alex, Jacob and 2 others like this"

// function deleteNth(arr, n) {
//   const obj = {};

//   arr.forEach((el) => {
//     obj[el] ? (obj[el] += 1) : (obj[el] = 1);
//   });

//   const keys = Object.keys(obj);

// }

// console.log(deleteNth([20, 37, 20, 21], 1)); //, [20, 37, 21];
// console.log(deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2, 2], 3)); //, [1, 1, 3, 3, 7, 2, 2, 2];

// function array(arr) {
//   //Good luck
//   const arr1 = arr.split(",");
//   if (arr1.length <= 2) {
//     return null;
//   } else {
//     return arr1
//       .slice(1, arr1.length - 1)
//       .join(" ")
//       .trim();
//   }
// }

// console.log(array("1,2,3")); //, '2');
// console.log(array("1,2,3,4")); //, '2 3');
// console.log(array("1,2,3,4,5")); //, '2 3 4');

// console.log(array("")); //, null);
// console.log(array("1")); //, null);
// // console.log(array("1,2")); //, null);
// Build Tower
// Build a pyramid-shaped tower given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:
/**
 * 
 * [
  "  *  ",
  " *** ", 
  "*****"
]
 */

// function towerBuilder(nFloors) {
//   // build here
// }
// towerBuilder(1), ["*"];
// towerBuilder(2), [" * ", "***"];
// towerBuilder(3), ["  *  ", " *** ", "*****"];

//done
// function countPositivesSumNegatives(input) {
//   // your code here
//   if (!input) return [0, 0];
//   return input.reduce(
//     (acc, item) => {
//       if (item > 0) {
//         acc[0] += 1;
//       } else {
//         acc[1] += item;
//       }
//       return acc;
//     },
//     [0, 0]
//   );
// }
// let testData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15];
// let actual = countPositivesSumNegatives(testData);
// console.log(actual);
// let testData1 = [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14];
// let actual1 = countPositivesSumNegatives(testData1);
// console.log(actual1);
// console.log(countPositivesSumNegatives([]));
// console.log(countPositivesSumNegatives([0, 0]));

// function isAN(value) {
//   if (value === null) {
//     return false;
//   }
//   if (Array.isArray(value)) {
//     return false;
//   }
//   if (typeof value === "object") {
//     return !Number.isNaN(+value);
//   }
//   if (typeof value === "number") {
//     return !Number.isNaN(+value);
//   }
//   return false;
// }

// console.log(isAN(new Number(1)));
// console.log(isAN(new Number("a")));
// console.log(isAN([]));
// console.log(isAN(true));
// console.log(isAN("1"));
// console.log(isAN(false));
// console.log(isAN(1));
// console.log(isAN(null));
// console.log(+new Number("1"));
// console.log(+[]);
// console.log(null === null);

// String.prototype.isUpperCase = function () {
//   return this.split(" ").every((el) => el === el.toUpperCase());
// };
// console.dir(String);

// const a = "CAST".isUpperCase();
// console.log(a);

// function toCamelCase(str) {
//   return str.split("-" || "_");
// }

// console.log(toCamelCase("")); //, '', "An empty string was provided but not returned"
// console.log(toCamelCase("the_stealth_warrior")); //, "theStealthWarrior", "toCamelCase'the_stealth_warrior'
// console.log(toCamelCase("The-Stealth-Warrior")); //, "TheStealthWarrior", "toCamelCase'The-Stealth-Warrior'
// console.log(toCamelCase("A-B-C")); //, "ABC", "toCamelCase('A-B-C') did not return correct value"

// function duplicateCount(text) {
//   //...
//   const arrStr = text.toLowerCase().split("");
//   const counterObj = {};
//   let counter = 0;
//   arrStr.forEach((el) => {
//     if (counterObj[el]) {
//       counterObj[el] += 1;
//     } else {
//       counterObj[el] = 1;
//     }
//   });

//   for (const key in counterObj) {
//     if (counterObj[key] > 1) {
//       counter += 1;
//     }
//   }
//   return counter;
// }

// console.log(duplicateCount("")); //, 0
// console.log(duplicateCount("abcde")); //, 0
// console.log(duplicateCount("aabbcde")); //, 2
// console.log(duplicateCount("aabBcde")); //, 2,"should ignore case"
// console.log(duplicateCount("Indivisibility")); //, 1
// console.log(duplicateCount("Indivisibilities")); //, 2, "characters may not be adjacent

// function rowSumOddNumbers(n) {
//   // TODO
//   console.log(Math.pow(n, 3));

// }

// console.log(rowSumOddNumbers(1)); // 1;

// console.log(rowSumOddNumbers(42)); //, 74088;

// function findEvenIndex(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     if (
//       arr.slice(0, i).reduce((acc, item) => (acc += item), 0) ===
//       arr.slice(i + 1).reduce((acc, item) => (acc += item), 0)
//     )
//       return i;
//   }
//   return -1;
// }

// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1])); //, 3;
// console.log(findEvenIndex([1, 100, 50, -51, 1, 1])); //, 1;
// console.log(findEvenIndex([20, 10, 30, 10, 10, 15, 35])); //, 3;
// console.log(findEvenIndex([1, 2, 3, 4, 5, 6])); //, -1;
// console.log(findEvenIndex([20, 10, -80, 10, 10, 15, 35])); //, -1;

// function arrange(s) {
//   // your code here
//   let arr = [...s];
//   let t = [];

//   for (let i = 0; i < arr.length / 2; i++) {
//     if (i % 2 === 0) {
//       t = t.concat([arr[0 + i], arr[arr.length - (1 + i)]]);
//     } else {
//       t = t.concat([arr[arr.length - (1 + i)], arr[0 + i]]);
//     }
//   }
//   // while (arr.length > 0) {
//   //   let firstEL = arr.shift();
//   //   let lastEl = arr.pop();
//   //   firstEL !== undefined ? t.push(firstEL) : firstEL;
//   //   lastEl !== undefined ? t.push(lastEl) : lastEl;
//   //   arr.reverse();
//   // }
//   return arr.length % 2 === 0 ? t : t.slice(0, t.length - 1);
// }

// console.log(arrange([1, 2])); //, [1, 2]);
// console.log(arrange([4, 3, 2])); //, [4, 2, 3]);
// console.log(arrange([9, 7, -2, 8, 5, -3, 6, 5, 1])); //, [9, 1, 5, 7, -2, 6, -3, 8, 5]);
// console.log(arrange([1])); //, [1]);
// console.log(arrange([])); //, []);
// console.log(arrange([2, 4, 3, 4])); //, [2, 4, 3, 4]);
// console.log(arrange([-8, -9, 5, 4, -5, -9, 7])); //, [-8, 7, -9, -9, 5, -5, 4]);

// function  myF(str, num) {
//   const arrCodes = [];
//
//   for (let i = 0; i < str.length; i++) {
//     if (str.charCodeAt(i) === 32) {
//       arrCodes.push(str.charCodeAt(i));
//     } else {
//       arrCodes.push(str.charCodeAt(i) + num);
//     }
//   }
//
//   return String.fromCharCode(...arrCodes);
// }
//
// console.log(myF("H e llo", 4));
//


