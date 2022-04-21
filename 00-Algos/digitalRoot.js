function digital_root(n) {
    // ...
    // let arr = [];
    // let sum = n;
    // while(sum>9){
    //     arr = sum.toString().split("");
    //     sum = arr.reduce((previousValue, currentValue)=> parseInt(previousValue) + parseInt(currentValue), 0 
    //     );
    // }
    // return sum;
}

// function digital_root(n) {
//     // ...
//     let arr = [];
//     let sum = n;
//     let reduce = (a,b) => parseInt(a) + parseInt(b)
//     while(sum>9){
//         arr = sum.toString().split("");
//         sum = arr.reduce(reduce);
//     }
//     return sum;
// }

function digital_root(n) {
    // ...
    return (n - 1) % 9 + 1;
}
console.log("(942 - 1) % 9 + 1 --> ", (942 - 1) % 9 + 1)
console.log("(1234 - 1) % 9 + 1 --> ", (1234 - 1) % 9 + 1)

console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))