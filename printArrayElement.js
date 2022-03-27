var arr = ["8", "17", "25", "42", "67"];

var recursive_function = function (array) {
  if (array.length > 0) {
    console.log(array[0]);
    recursive_function(array.slice(1));
  }
};

recursive_function(arr);
