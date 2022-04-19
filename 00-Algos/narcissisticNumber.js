function narcissistic(value) {
    // Code me to return true or false
    let num = value.toString().length;
    let calculate = 0;
    for(let i=0; i<value.toString().length; i++){
        calculate += value.toString()[i] ** num 
    }
    return calculate == value ? true:false

}

console.log(narcissistic(1638))
console.log(narcissistic(247))
console.log(narcissistic(7))
console.log(narcissistic(1935))
console.log(narcissistic(153))
console.log(narcissistic(3489))
console.log(narcissistic(371))