// Spread operator / Array
const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5]; // Protip concatenar elementos de otro arreglo

console.log(array2); // [1, 2, 3, 4, 5]

// Map
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);

console.log(doubled); // [2, 4, 6, 8]

// Includes
const fruits = ['apple', 'banana', 'cherry'];
const hasBanana = fruits.includes('banana');

console.log(hasBanana); // true

//Every
const numbers2 = [2, 4, 6, 8];
const allEven = numbers2.every((num) => num % 2 === 0);

console.log(allEven); // true

// Some
const numbers3 = [1, 3, 5, 7];
const hasEven = numbers3.some((num) => num % 2 === 0);

console.log(hasEven); // false

// ForEach
const colors = ['red', 'green', 'blue'];
colors.forEach((color) => {
    console.log(color);
});

// Find
const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
];
const user = users.find((user) => user.id === 2);

console.log(user); // { id: 2, name: 'Bob' }

// Filter 
const numbers4 = [1, 2, 3, 4, 5];
const evenNumbers = numbers4.filter((num) => num % 2 === 0);

console.log(evenNumbers); // [2, 4]

// Reduce
const numbers5 = [1, 2, 3, 4, 5];

const sum = numbers5.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sum); // Result: 15

// Slice 
const fruits2 = ['apple', 'banana', 'cherry', 'date', 'fig'];

const slicedFruits = fruits2.slice(1, 4);

console.log(slicedFruits); // Result: ['banana', 'cherry', 'date']

// Sort 
const fruits3 = ['cherry', 'banana', 'apple', 'date', 'fig'];

fruits3.sort();

console.log(fruits3); // Result: ['apple', 'banana', 'cherry', 'date', 'fig']

