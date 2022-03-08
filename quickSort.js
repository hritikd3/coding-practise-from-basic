function partition(arr,start,end){
    let pivot= arr[end];
    end--;
    while(arr[start]< pivot){
        start++;
    }
    while(arr[end]> pivot){
        end--;
    }
}