/*

create a function that accepts a string as an input and outputs an array with each word from the string


input: "  hello hey how   you   doing?   "
output: ["hello", "hey", "how", "you", "doing?"]

*/

// 1

// const stringBreak = (str) =>{
//     const myArray = str.split(" ");
//     return myArray;
// }


// 2

// const stringArray = (str) => {
//     let word = "";
//     let arr = [];
//     for (let i = 0; i<str.length; i++) {
//         if (str[i] !== " ") {
//             word += str[i];
//         }else{
//             if (word !== "") {
//                 arr.push(word);
//                 word = "";
//             }
//         }
//     }return arr;
// }


//3

// arrString = (str) => {
//     let arr = [];

//     for(let i = 0; i < str.length; i++ ) {
//         let newStr = '';
//         while (str[i] == ' ') {
//             i++
//         }
//         while (str[i] != " " && i < str.length){
//             newStr += str[i];
//             i++
            
//         }
//         arr.push(newStr);
//     }
//     return arr;
// }
// console.log(arrString("  hello hey how    you   doing?"))


// 4

// const stringToWord = (str) => {
//     let word = '';
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//       if (str[i] != ' ') {
//         word += str[i];
//         //   console.log(str[i]);
//       } else {
//         if (word.length > 0) {
//           arr.push(word);
//           word = '';
//         }
//       }
//     }
//     return arr;
//   };
//   console.log(stringToWord('  hello hey how   you   doing?   '));
//   console.log(stringToWord(' good morning everyone!'));
/*
str = '  hello hey how   you   doing?   '
word = ''
arr= ['hello']
i=0,1,2,3,4,5,6,7,8
  */


// 5

// function arrayMaker(str){
//     let arr = []
//     for(let i = 0;i < str.length;i++){
//         let temp = ""
//         if(str[i] != " "){
//             while (str[i] != " "){
//             temp = temp + str[i]
//             i++
//             }
//             arr.push(temp)
//         }
//     }
//     return arr
// }

// console.log(arrayMaker("  hello hey how   you   doing?   "))