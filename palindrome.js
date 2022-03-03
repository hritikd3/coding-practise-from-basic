//check the given  input is palindrome or not , eg> 16361 this is padlindrome

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
   if(reverseStr === lowRegStr){
        console.log("is a padindrome")
   }else{
       console.log("not  a padindrome");
   }

}
palindrome("a nan a");