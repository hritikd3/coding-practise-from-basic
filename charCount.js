//write function to take string as input from user and return the count of eachcharacter in string
// input: "hello"
// output: { h:1,e:1,l:2,o:1}

function charCount(str) {
  //make an object at the end
  let result = {};
  // loop over the string
  for (i = 0; i < str.length; i++) {
    let char = str[i];
    // if char is number/letter and is in key so increament it
    if (result[char] > 0) {
      result[char]++;
    } else {
      //if char is number/letter and is not in object so add 1
      result[char] = 1;
    }
  }
  //if char is something else so return the object at the end
  return result;
}
charCount("hey how are You!");
