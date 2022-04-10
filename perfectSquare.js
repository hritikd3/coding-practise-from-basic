// Write a function which returns True if n is a perfect square else False
// Sample Input 1
// 4
// Sample Output 1
// true
// Explanation of Sample 1
// Square root of 4 is 2, hence 4 is a perfect square
 


// Naive approach:-  

function checkPerfect(n){
    // ceil function computes the nearest greater value 
if(Math.ceil(Math.sqrt(n))==Math.floor(Math.sqrt(n)))
{
	console.log("true")
}
else {
	console.log("false")
}
}
let n=4;
checkPerfect(n)