//print al pairs upto n and also find time complexity

function printAllPairs(n) {
  for (let i = 0; i < n; i++) {
    //O(n) .. for loop is nested so O(n) * O(n)
    for (let j = 0; j < n; j++) {
      //O(n)
      console.log(i, j);
    }
  }
}
//time complexity -  O(n^2)
printAllPairs(5);
