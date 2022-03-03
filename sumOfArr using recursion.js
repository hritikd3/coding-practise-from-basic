function sumOfArr(arr,index){
    if(index==arr.length)
    { 
        return 0; 
    } 
let sum= sumOfArr(arr,index+1);
    // console.log(sum)
    return sum+ arr[index]


    
}
console.log(sumOfArr([5,2,3,2,3,1,2,10],0))