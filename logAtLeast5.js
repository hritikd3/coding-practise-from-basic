//program which takes n and if it is max so consider n otherwise 5 is at least the inteeration it will run.

function logAtLeast5(n){
    for(i=1;i <= Math.max(5,n); i++){
        console.log(i)
    }
}
// logAtLeast5(3) // here it wont run for 3 times because atleast is 5
logAtLeast5(2) // it will run till 11 times