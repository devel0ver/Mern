// If the number has an integer square root, take this, otherwise square the number.

// [4,3,9,7,2,1] -> [2,9,3,49,4,1]
function squareOrSquareRoot(array) {
    let output = []
    for (let i=0; i<array.length; i++){
        Math.sqrt(array[i]) % 1 == 0 ? output.push(Math.sqrt(array[i])) : output.push(Math.pow(array[i],2))
    }
    return output; 
}

console.log(squareOrSquareRoot([100, 101, 5, 5, 1, 1]))