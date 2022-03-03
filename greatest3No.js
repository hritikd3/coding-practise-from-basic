//find the greatest among three number

function greatest(a,b,c){
 

    if(a>=b && a>=c){
        console.log( `${a} ` ,"is greater than b & c");
    }
    if(b>=a && b>= c){
        console.log( `${b}` ," is greater than a & c");
    }
    if(c>=a && c>=b){
        console.log(`${c}`, "is greater than a & b");
    }
}
greatest(45,63,112);