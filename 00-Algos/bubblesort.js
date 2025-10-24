//https://www.hackerearth.com/practice/algorithms/sorting/bubble-sort/visualize/

function bubbleSort(arr){

    for (let j = 0; j < arr.length - 1; j++){
            // move from left to right in the array starting at index 0
        for(let i = 0; i < arr.length - 1 - j; i++){
            // compare the value at the current index with the value at the next if value is greater than the next;
            if(arr[i] > arr[i+1]){
                // If out of order, Swap the value at the current index with the value of the next.
                [arr[i], arr[i+1]] = [arr[i+1], arr[i]] // This is called a "destructure swap"
            }
        }
    }
    return arr
}




console.log(bubbleSort([5,23,0,12,8,6]))  //[0,5,6,8,12,23]


// Challenge 1 – Dual Condition Sort (Objects)
const group = [
    { name: "Zaid", age: 25 },
    { name: "Amal", age: 22 },
    { name: "Sara", age: 25 },
    { name: "Bilal", age: 22 }
];

// GOAL:
// Sort first by age (ascending),
// and if two people have the same age, sort by name (alphabetically).

var dualConditionSort = (arr) =>{
    for (var i = 0; i < arr.length - 1; i++){
        for (var j = 0; j < arr.length - 1 - i; j++){
            if(arr[j].age > arr[j+1].age){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
            else if(arr[j].age == arr[j+1].age && arr[j].name.localeCompare(arr[j+1].name) > 0){
                [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
            }
        }
    }
    return arr
}

console.log(dualConditionSort(group))