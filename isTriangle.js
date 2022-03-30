// check given sides form triangle or not

function isTriangle(a,b,c)
{
 if (b + c <= a || a + c <= b || a + b <= c) {
     console.log(" no do not form a triangle")
    //  return false;
} else {
    //  return true;
    console.log("it forms a triangle")
 }
}

let a =7;
  b = 10,
  c = 5;

console.log(isTriangle(a,b,c))

//     console.log("form a triangle")
// }else{
//     console.log("not a triangle")
// }
