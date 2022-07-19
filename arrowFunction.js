// Regular functions
console.log(`\nRegular`)
function add(a, b){
    return a + b;
}
console.log(add(5, 5));

// Other function expressions
console.log(`\nOther`)
let addIt = function(a, b){
    return a + b;
}
console.log(addIt(5, 6));


// Arrow Functions
console.log(`\nArrow`)
let addUp = (a, b) => {
    return a + b;
}
console.log(addUp(5, 7));

let addd = (a, b) => a + b;
console.log(addd(5,8));


// Practice
console.log(`\nPractice`);

let myarr = [5,6,4,7,8,9,85,3,2,34];
let myarr2 = [3,5,6];

console.log(`Reg Arrow`);
let greaterThan5 = (arr) => {
    if (arr.length > 5){
        return true;
    } else {
        return false;
    }
}
console.log(greaterThan5(myarr));
console.log(greaterThan5(myarr2));

console.log(`1 line Arrow`);
let greater5 = (arr) => arr.length > 5;
console.log(greater5(myarr));
console.log(greater5(myarr2));

console.log(`\nOdd and div5`)
let odd5s = (arr) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 !== 0 && arr[i] % 5 === 0){
            newArr.push(arr[i])
        }
    }
    if (newArr.length >= 3){
        return true;
    } else {
        return false;
    }
}
console.log(odd5s(myarr));

console.log(`\nHW!`);
let hello = () => console.log("Hello, World!");
hello();










