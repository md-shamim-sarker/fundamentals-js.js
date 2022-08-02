/*
- Number type
    |- Integer type
    |- Float type
*/
let a = 12;
let b = 12.15;
let c = 1 / 0;
let d = 'A' / 2;

console.log(a);
console.log(typeof a);

console.log(b);
console.log(typeof b);

console.log(c);
console.log(typeof c);

console.log(d);
console.log(typeof d);

// Bigint type
let e = 100000000n;
console.log(e);
console.log(typeof e);

// String type
let f = 'Mango';
let g = "Banana";
let h = `Apple`;

console.log(typeof f);
console.log(typeof g);
console.log(typeof h);
console.log(`This is a feature of backticks: ${f + ' ' + g} ${h}`);

// Boolean type
let i = true;
let j = false;
let k = 5 > 4;
let l = 4 > 5;
console.log(typeof i);
console.log(i);

// Null type
let m = null;
console.log(typeof m); // object
console.log(m);

// Undefined type
let n;
console.log(typeof n); // undefined
console.log(n);

// Object type
let o = [
    'Sneha',
    15,
    'SSC'
];
let p = {
    stdName: 'Sneha',
    age: 15,
    level: 'SSC'
};
console.log(typeof o);
console.log(Array.isArray(o)); // true
console.log(o);
console.log(typeof p);
console.log(Array.isArray(p)); // false
console.log(p);