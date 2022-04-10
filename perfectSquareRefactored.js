// Write a function which returns True if n is a perfect square else False
// Sample Input 1
// 4
// Sample Output 1
// true


// efficient approach using binary search:-

function perfectSquare(n){
    let low=0, high=n;

    while(low <= high){
        let mid= parseInt((low+high)/2);
        if(mid*mid==n) {
             return true;
        }else if(mid *mid <n){
            low=mid+1;
        } else  {
 high=mid-1;
        }
    }
    return false;
}
let n=25;
if(perfectSquare(n))
console.log("true")
else
console.log("false");