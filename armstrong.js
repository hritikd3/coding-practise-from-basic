// program to print armstron number- armstrong are those number when giving power of 3 to it and add all the sigita so its
// equal to same number eg-> 153 = 1^3+5^3+3^3= 153

let num = 154;
let sum = 0;

// passing num in temp variable
let temp = num;

while (temp > 0) {
  let rem = temp % 10;
  sum += rem * rem * rem;

  // convert into single integer form
  temp = parseInt(temp / 10);
}
if (sum == num) {
  console.log(" number is armstrong ");
} else {
  console.log(" number is not a armstrong num");
}
