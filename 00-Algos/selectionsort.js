//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

// const selectionSort = (arr)=>{
//     for( let j = 0; j < arr.length; j++){
//         let bigIndex = 0 
//         for(let x = 0; x < arr.length-j; x++){
//             // console.log(arr[x])
//             // compare the current value with the value at the largest index so far to see if the current value is larger 
//             if(arr[x] > arr[bigIndex]){
//                 //update the big index to be the current index
//                 bigIndex = x
//             }
//         }
//         console.log(bigIndex)
//         /Index], arr[arr.length-1-j]]
//         let temp = arr[bigIndex] //swap the value at the big index with the value at the last index (arr.length-1)
//         // [arr[arr.length-1-j], arr[bigIndex]] = [arr[big
//         arr[bigIndex] = arr[arr.length-1-j]
//         arr[arr.length-1-j] = temp
            

//     }
//     return arr
// }

// console.log(selectionSort([4,8,5,2,1,0,9,7]))


/*
b = 0->1->6
x = 0->1->2...6->7




*/

// Challenge: Sort Players by Score

const players = [
    { name: "Ali", score: 25 },
    { name: "Sara", score: 60 },
    { name: "Yusuf", score: 40 },
    { name: "Hana", score: 55 }
];

const selectionSortPlayers = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let minIndex = i;
        for (let x = i + 1; x < arr.length; x++){
            // Compare the current value with the value at minIndex to see if the current value is lass
            if(arr[x].score < arr[minIndex].score){
                // Update the minIndex with the current index
                minIndex = x;
            }
        }

        let temp = arr[i];  // Swap the element at i with the element at minIndex
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSortPlayers(players));