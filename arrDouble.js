//multiply the arr elements by 2



function arrDouble(arr){
    let newArr=[];
for(let i=0;i< arr.length; i++){
 newArr.push(2*arr[i])
}
return newArr;
}
console.log(arrDouble([2,4,8])) //4,8,16


//efficient way usiing map method

// let arr1 = [2, 4, 6];
// let map1 = arr1.map((x) => x * 3);
// console.log(map1);