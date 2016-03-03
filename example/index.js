"use strict";

const arrObj = require("../lib");

let arr = [
    { name: "Alice", location: { name: "Earth" } },
    { name: "Bob", location: { name: "Mars" } }
];

console.log(arrObj(arr, "name"));
// { Alice: { name: 'Alice', location: { name: 'Earth' } },
//   Bob: { name: 'Bob', location: { name: 'Mars' } } }

console.log(arrObj(arr, "location.name", true));
// { Earth: { name: 'Alice', location: { name: 'Earth' } },
//   Mars: { name: 'Bob', location: { name: 'Mars' } } }

console.log(arrObj([1, 4, 9, 16], c => {
    return Math.sqrt(c);
}));
// { '1': 1, '2': 4, '3': 9, '4': 16 }
