//https://www.rapidtables.com/convert/number/decimal-to-binary.html


// function dec2binary(num){
//     let output = "";

//     //your code here






//     return output;
// }



// dec2binary(23) //10111



// //===========================================
// const int_to_binary = (num) => {
//     let output = "";
//     do {
//         output = `${num & 1}${output}`;
//         num >>= 1;
//     } while (num > 0)
//     return output;
// }


// //========================================
// function dec2binary(num){
//     let output = "";
//     while (num > 0){
//         if (num % 2 == 1) {
//             output += 1
//             num = Math.floor(num / 2)
//         } else {
//             output += 0
//             num = Math.floor(num / 2)
//         }
//     }
//     return output.split("").reverse().join("");
// }



// const binaryConvert = (num) => {
//     var quotient = null;
//     var result = "";
//     while(quotient != 0){
//         if(num % 2 == 0){
//             num = num/2;
//             quotient = num
//             result = 0 + result
//         }
//         else{
//             num = Math.floor(num/2);
//             quotient = num
//             result = 1 + result
//         }
//     }
//     return result;
// }

// console.log(binaryConvert(92))




// function dec2binary(num) {
//     if (num == 0) {
//         return "0";
//     }
//     let output = "";
//     let remainder = [];
//     while (num > 0) {
//         remainder.push(num % 2);
//         num = Math.floor(num / 2);
//     }
//     for (let i = remainder.length - 1; i >= 0; i--) {
//         output += remainder[i];
//     }
//     return output;
// }

// console.log(dec2binary(23)); //10111
// console.log(dec2binary(100)); //1100100
// console.log(dec2binary(1)); //1
// console.log(dec2binary(0)); //0



//https://www.rapidtables.com/convert/number/binary-to-decimal.html
// function binary2decimal(str){
//     let output = 0;
//     let dec = str.split('').reverse();
//     for (let i = 0; i < dec.length; i++){
//         // console.log(dec[i], "-->", Math.pow(num, output++))
        
//         output += dec[i]*2**i;
//     }
//     return output;
// }
// // parInt(10111,2)

// console.log(binary2decimal("10111")) //23





// function dec2hex(num){
//     let output = ''
//     let start = '0123456789ABCDEF'
//     let remainder = ''

//     remainder = num%16;

//     console.log(remainder)


//     return output
// }


// dec2hex(58) //3A


function dec2hex(decimal) {
    const hexadecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    const hex = [];

    if (decimal === 0) {
        return 0;
    } else {
        while (0 != decimal) {
        hex.unshift(hexadecimal[decimal % 16]);
        decimal = Math.floor(decimal / 16);
        }
    }

    return hex.join('');
}

console.log(dec2hex(0)) //0
console.log(dec2hex(52)) //34
console.log(dec2hex(2000)) //7D0
console.log(dec2hex(9999)) //270F