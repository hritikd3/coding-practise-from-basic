function same(arr1,arr2){
    if(arr2.length!= arr2.length){
        return false;
    }
    for(let i=0; i< arr1.length;i++){
      let currentIndex = arr2.indexOf(arr1[i] ** 2);
      if (currentIndex == -1) {
        return false;
      }
      console.log(arr2); // true
      arr2.splice(currentIndex, 1);
    }
        return true;
    }


same([1, 2, 3, 2], [9,4, 4,1]) 