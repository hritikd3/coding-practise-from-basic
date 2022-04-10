// program to find given number have power four 
// input:  4 output: 4^1=4 true
// input:  16 outpuot 4^4:16 true
 
function isPowerFour (n){
if(n==0) return false
while(n!=1) 
{
if(n%4!=0)
return false;
n=n/4;
}
return true;
}
let n=16;
if(isPowerFour (n)) 
console.log("true") 
else 
console.log("false")
 