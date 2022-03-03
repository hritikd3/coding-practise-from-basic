
//  var reverse=0; var digit=0;
//  var num=4321;

 
//  for(;num != 0; num /= 10) {
//      digit = num % 10;
//     reverse = reverse * 10 + digit;
//  }
//   console.log(num)


// function reversedNum(num) {
//     return (parseFloat(num.toString().split('').reverse().join(''))* Math.sign(num)
//     )                 
//   }
//   console.log(reversedNum(8761))

function reverse(num)
{
    return(parseFloat(num.split('').reverse().join(''))*Math.sign(num))
    console.log(reverse(8277))
}