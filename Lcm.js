//find LCM of two number.


function lcm(num1,num2){
  //higher among num1 and  num2 is stored in min
  let min = (num1 > num2) ? num1 : num2;
  //while loop
  while (true) {
    if (min % num1 == 0 && min % num2 == 0) { //The variable min is divided by both the num1 and num2
     //If both numbers' remainders are equal to 0, then it is the LCM and the break statement terminates the program.
     
     console.log(`the L.C.M of  ${num1} & ${num2} is ${min}`);
     //consoling using template literal

      break;
    }
    min++;
  }
}
lcm(6,8)