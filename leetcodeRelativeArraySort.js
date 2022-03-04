//https://leetcode.com/problems/relative-sort-array/
//Input: arr1 = [2,3,1,3,2,4,6,7,9,2,19], arr2 = [2,1,4,3,9,6]
// Output: [2,2,2,1,4,3,3,9,6,7,19]

 var relativeSortArray = function (arr1, arr2) {
   let map = {};

   function compare(a, b) {
     //4 9
     // 4 will come first because index of 4 in arr2 is less
     // a and b both are present in map
     if (map[a] !== undefined && map[b] !== undefined) {
       return map[a] - map[b];
     }

     // 4 7
     // a is in arr2  but not b
     if (map[a] !== undefined && map[b] === undefined) {
       return -1;
     }

     // 7 9
     // a is not in arr2 but b is
     if (map[a] === undefined && map[b] !== undefined) {
       return 1;
     }

     //7 19
     // both are not in arr2
     return a - b;
   }

   for (let i = 0; i < arr2.length; i++) {
     map[arr2[i]] = i;
   }
   arr1.sort(compare);
   return arr1;
 };
