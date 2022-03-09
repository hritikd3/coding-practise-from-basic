//write function to take string as input from user and return the count of eachcharacter in string
// input: "hello"
// output: { h:1,e:1,l:2,o:1}

// Solution: This is efficient way to solve 
function charCount(str) {
  let result = {};
  for (var char of str) {
    char = char.toLowerCase();
    if (/[a-z0-9]/.test(char)) {
      result[char] = ++result[char] || 1; // we are checking if char is number/letter add +1(i.e, result[char]) or not so simply give 1
    }
  }
  return result;
}
charCount("hey How Are 123");
