let letAge: number = 25; // type 'number' represents set of { all possible numbers }
letAge = 30;
const constAge = 25; // a literal type of 25: { 25 }
const constArray = [];
constArray.push(3);

let firstName = "Vadym";

const isStudent = true;
const nullVal = null;
const undefinedVal = undefined;
// const bigIntValue = 12345678901234567890n;

// Arrays
let numbers: number[] = [2002, 2003, 2004];

// Union of types: |
// let myCar: (number | string)[] = [2002, "Toyota", "Corolla"];
let myCar: (number | string)[] = ["Toyota", "Corolla", 2002, "2-wheel drive"]
// const [year, make, model] = myCar

// Tuple: fixed-order, fixed number-of-elements array
let myCarTuple: [number, string, string] = [2002, "Toyota", "Corolla"]
const [year, make, model] = myCarTuple

