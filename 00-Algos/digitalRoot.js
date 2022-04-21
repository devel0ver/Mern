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
    let arr = [];
    let sum = n;
    let reduce = (a,b) => parseInt(a) + parseInt(b)
    while(sum>9){
        arr = sum.toString().split("");
        sum = arr.reduce(reduce);
    }
    return sum;
}
console.log(digital_root(16))
console.log(digital_root(942))
console.log(digital_root(132189))
console.log(digital_root(493193))