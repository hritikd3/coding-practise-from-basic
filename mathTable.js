// Write a program to create a Mathematical calculation table from 0 to given number n.

function mathTable(table, n) {
  for (let i = 1; i <= n; i++) {
    console.log(`${table} * ${i} is ${table * i}`);
  }
}
mathTable(5, 10);
