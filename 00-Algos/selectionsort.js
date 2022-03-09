//https://www.hackerearth.com/practice/algorithms/sorting/selection-sort/visualize/

const selectionSort = (arr)=>{
    for( let j = 0; j < arr.length; j++){
        let bigIndex = 0 
        for(let x = 0; x < arr.length-j; x++){
            // console.log(arr[x])
            // compare the current value with the value at the largest index so far to see if the current value is larger 
            if(arr[x] > arr[bigIndex]){
                //update the big index to be the current index
                bigIndex = x
            }
        }
        console.log(bigIndex)
        //swap the value at the big index with the value at the last index (arr.length-1)
        // [arr[arr.length-1-j], arr[bigIndex]] = [arr[bigIndex], arr[arr.length-1-j]]
        let temp = arr[bigIndex]
        arr[bigIndex] = arr[arr.length-1-j]
        arr[arr.length-1-j] = temp
            

    }
    return arr
}

console.log(selectionSort([4,8,5,2,1,0,9,7]))


/*
b = 0->1->6
x = 0->1->2...6->7




*/