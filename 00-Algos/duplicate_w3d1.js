// 1. Intersect Sorted Arrays
// Given two sorted arrays, return a new array containing all the numbers they have in common
// This includes duplicates too! The intersection of [2,2] and [2,2,2] would be [2,2]

//Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,7,9,10]
//Ex: given [1,1,4,5,8] and [1,1,1,5,6,8] return [1,1,5,8]
//Ex: given [1,3,5,7,9] and [2,4,6,8,10] return []

// const instersect = (arr1, arr2) => {
//     let i = 0;
//     let j = 0;
//     let result = [];
//     //you can also say while(i<arr1.length && j<arr2.length)
//     while (arr1[i] && arr2[j]) {
//       // once either array is outside of array range we stop looping there will be nore more dupes
//         if (arr1[i] < arr2[j]) {
//         // which value
//             i++;
//         } else if (arr2[j] < arr1[i]) {
//             j++;
//         } else if (arr1[i] === arr2[j]) {
//             result.push(arr1[i]);
//             i++;
//             j++;
//         }
//     }
//     return result;
// };

// let one = [2, 4, 7, 9, 10];
// let two = [2, 3, 5, 7, 9, 10];

// console.log(intersect(one, two));

// 2. Union Sorted Arrays
// Efficiently combine two pre-sorted arrays into a new sorted array
// no built in functions!!!

// const union = (arrLeft, arrRight) => {
//     let iLeft = 0;
//     let iRight = 0;
//     let newArr = [];

//     while(iLeft < arrLeft.length && iRight < arrRight.length){
//         if(arrLeft[iLeft] == arrRight[iRight]){
//             newArr.push(arrLeft[iLeft]);
//             ++iLeft;
//             ++iRight;
//         }
//         else if(arrLeft[iLeft] < arrRight[iRight]){
//             newArr.push(arrLeft[iLeft]);
//             ++iLeft;
//         }
//         else{
//             newArr.push(arrRight[iRight]);
//             ++iRight;
//         }
//     }

//     if(iLeft < arrLeft.length || iRight < arrRight.length)
//         newArr.push(iLeft >= arrLeft.length ? arrRight[iRight] : arrLeft[iLeft]);

//     return newArr;
// }

// Ex: given [2,4,7,9,10] and [2,3,5,7,9,10], return [2,3,4,5,7,9,10]
// Ex: given [1,2,2,2,7] and [2,2,6,6,7] return [1,2,2,2,6,6,7]
// Ex: given [1,5,9] and [2,6,10] return [1,2,5,6,9,10]






//  1.

// const union = (arr1, arr2) => {
//     let output = [];
//     let a2 = [...arr2];
//     arr1.forEach(x => {
//         for (let i = 0; i < a2.length; i++) {
//             if (a2[i] === x) {
//                 output.push(x);
//                 a2 = a2.splice(i + 1);
//                 break;
//             }
//         }
//     });
//     return output;
// }

// const unionSort = (arr1, arr2) => {
//     let output = [];
//     let a2 = [...arr2];
//     arr1.forEach(x => {
//         while (a2[0] < x) {
//             output.push(a2.shift());
//         }
//         if (a2[0] === x) {
//             output.push(a2.shift());
//         } else {
//             output.push(x);
//         }
//     });
//     return output;
// }

// const unionSort2_OldSchoolBoogaloo = (arr1, arr2) => {
//     let storage = Array(arr1.length + arr2.length);
//     let [x, y] = [0, 0];
//     let length = 0;
//     for (let i = 0; x < arr1.length || y < arr2.length; i++){
//         if (arr1[x] === arr2[y]){
//             storage[i] = arr1[x];
//             x++;
//             y++
//         } else if (arr1[x] < arr2[y]){
//             storage[i] = arr1[x];
//             x++;
//         } else {
//             storage[i] = arr2[y];
//             y++;
//         }
//         length++;
//     }
//     let output = Array(length);
//     for (let i = 0; i < length; i++){
//         output[i] = storage[i];
//     }
//     return output;
// }



// 2.

// const intersect = (arr1, arr2) => {
//     const result = [];
//     let [x,y] = [0,0];
//     while (x < arr1.length && y < arr2.length) {
//         if (arr1[x] < arr2[y]) x++;
//         if (arr1[x] > arr2[y]) y++;
//         if (arr1[x]===arr2[y])
//         {result[result.length] = arr1[x], x,y++}
//     }return result;
// }
// let arr1 = [1, 2, 2, 3, 4];
// let arr2 = [2, 2, 4, 6, 7, 8];
// console.log(intersect(arr1, arr2));





// const unionSortedArrays = (arr1, arr2) => {
//     const result = [];
//     let [i,j] = [0,0];
//         while ( i < arr1.length || j < arr2.length){
//             if (arr1[i] < arr2[j] || !arr2[j]){
//                 result[result.length] = arr1[i];
//                 i++;
//             }else{
//                 result[result.length] = arr2[j];
//                 j++;
//             }
//         }return result;
// }
// console.log(unionSortedArrays([0,3,4,31], [4,6,30]));