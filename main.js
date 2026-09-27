// https://app.notion.com/p/map-and-filter-Exercises-3e644f8252fa807a95c7ced10d68a029

// map and filter Exercises

// 1 - Double the numbers
const numbers = [1, 2, 3, 4, 5];
let str = numbers.map((number) => number * 2) 
console.log(str)

// 2 - Add 10 to each number
const numberss = [5, 10, 15, 20];
let pro = numberss.map((numberss) => numberss + 10)
console.log(pro)

// 3 - Convert names to uppercase
const names = ["ali", "sara", "ahmed"];
 let con = names.map((names) => names.toUpperCase())
 console.log(con)

//  filter() 
// 4 - Get even numbers
const numberses = [1, 2, 3, 4, 5, 6];

let even = numberses.filter((numberses) => numberses % 2 === 0)
console.log(even)

// 5 - Get numbers greater than 10

const numberr = [5, 12, 8, 20, 3, 15];
let gre = numberr.filter((numberr) => numberr > 10)
console.log(gre)

// 6 - Get names longer than 4 characters
const namese = ["Ali", "Ahmed", "Sara", "Usman", "John"];
let nam = namese.filter((namese) => namese.length > 4)
console.log(nam)

// First filter numbers greater than 5, then map them to double:
const numbersr = [2, 6, 8, 3, 10];
let box = numbersr.filter((numbersr) => numbersr > 5).map((numbersr) => numbersr * 2);
console.log(box)

