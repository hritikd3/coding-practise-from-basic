
function ArmStrong(arr) {
  var sum = 0;
  var i;
  for (i = 0; i < arr.length; i++) {
    var temp = arr[i];
    while (temp > 0) {
      var remainder = temp % 10;
      sum += remainder * remainder * remainder;
      temp = parseInt(temp / 10);
    }
    console.log(sum);
    if (sum == arr[i]) {
      console.log(`${arr[i]} is an Armstrong number`);
    } else {
      console.log(`${arr[i]} is not an Armstrong number.`);
    }
  }
}

ArmStrong([153, 1634, 9, 123, 4]);


