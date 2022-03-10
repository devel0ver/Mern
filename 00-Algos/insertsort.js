//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

// function insertionSort(arr){
//     for(let x = 1; x < arr.length; x++){
//         console.log(arr[x])
//         let j = x
//         //as long as j is greater than 0 we want to check if the value to the left is greater than the current value. 
//         while(j > 0 && arr[j] < arr[j-1]){
//             //replace the element at the current index with the element to the left of it 
//             [arr[j], arr[j-1]] = [arr[j-1], arr[j]]
//             j--
//         }
//     }
//     return arr
// }



// console.log(insertionSort([5,23,0,12,8,6])) //[0,5,6,8,12,23]