function fib(num) {
  let first = 0;
  let second = 1;
  let next;

  for (let i = 0; i <= num; i++) {
    next = first + second;
    first = second;
    second = next;

    console.log(next);
  }
}
// console.log(fib(6))
fib(10);
