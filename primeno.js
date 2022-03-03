


console.log(isPrime(12))

function isPrime(num){
   
var prime=true;

for(let i=2;i<num;i++)
{
    if(num%i===0)
    {
      prime= false;
      
   break;
    }
}
if(prime)

{
    console.log("number is prime number")
}else{
    console.log("it is not a prime number")
 
}
}
