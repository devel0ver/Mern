//https://www.hackerearth.com/practice/algorithms/sorting/insertion-sort/visualize/

// function insertionSort(arr){
//     // Assume that the value of index 0 is always sorted. Start at index 1.
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


// Challenge: Sort Students by Grade

const students = [
    { name: "Ali", grade: 85 },
    { name: "Sara", grade: 95 },
    { name: "Yusuf", grade: 70 },
    { name: "Hana", grade: 90 }
];

var sortStudentsByGrade = (arr) => {
    for (let i = 1; i < arr.length; i++){
        let x = i;
        while(x > 0 && arr[x].grade < arr[x-1].grade){
            [arr[x], arr[x-1]] = [arr[x-1], arr[x]]
            x--;
        }
    }
    return arr
}

console.log(sortStudentsByGrade(students));