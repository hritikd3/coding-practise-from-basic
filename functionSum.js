//print the program to sum n number;

function sum(n){
    let sum=0;
    for(let i=0;i<=n;i++){
    sum =sum+i;
    }
    return sum
}
console.log(sum(3)) //6


//Alternate way to print

// function sum(n){
//     return n*(n-1)/2;
// }
// console.log(sum(4)) //6