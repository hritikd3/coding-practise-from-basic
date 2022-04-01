// array sum using loop 
const array = [1, 2, 3, 4,2];
let sum = 0;

for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum)

//array sum using Reduce() method 
const arr = [1, 2, 3, 4,5];
const reducer = (accumulator, curr) => accumulator + curr;
console.log(arr.reduce(reducer));

//using lodash library , it do has sum method that can easily add number in array
var lodash = require("lodash");
var array1 = [3, 6, 1, 5, 8,0,9,1];
var summ = lodash.sum(array1);
console.log(summ);