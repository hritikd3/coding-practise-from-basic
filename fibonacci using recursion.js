function fib(n) 
{
 
 if (n ==1 || n==0) 
{
    return n;
  }
  
return fib(n - 1) + fib(n - 2);
 // Fn-1 + Fn-2
}

console.log(fib(8))