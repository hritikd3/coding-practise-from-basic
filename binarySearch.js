let arr = [4, 5, 6, 1, 2, 4, 6, 7, 8, 9, 10, 2, 3, 5, 6, 8, 1, 2, 4, 5, 5];

arr.sort((a,b)=> a-b)
// console.log(arr)

function binarySearch(arr,target){
 let start=0;
 let end=arr.length-1;

 while(start <= end){
     let mid= Math.floor((start+end)/2);
     if(arr[mid]<  target){
         start= mid+1;
     }if(arr[mid]> target){
         start= mid-1;
     } else if(arr[mid]== target){
     return mid;
     }
 }
}

function globalLinearSearch(arr,target){
    let ans=[]
    for(let i=0; i<arr.length;i++){
        if(arr[i]===target){
            ans.push(i);
        }
    } return ans;
}
console.log(arr)
console.log(binarySearch(arr,4))


// challenge 
// if arr is sorted all the target consecutibve 
//1 2 3 5 7 7 7 7
//first occurence and last occurance