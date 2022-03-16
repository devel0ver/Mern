/*
rotateString(str,num)
Given a string and a number, rotate the string by that number amount and return the rotated string

input: "good morning", 3
output: "inggood morn"


input: "abcde", 5
output: "abcde"


*/

const rotateString = (str, num) => {
    //string @ index 0 is equal to 5 will give you an error
    let output = "";
    for(let j = str.length-num; j < str.length; j++){
        output += str[j]
    }
    for(let i = 0; i < str.length - num; i++){
        output += str[i]
    }
    console.log(output)
}
rotateString("Good morning America", 5)

rotateString("Patriots", 7)

rotateString("compete", 4)




/*
isRotation(str1,str2)
Given 2 strings, return true if they are rotations of one another, false if they are not

input: "good morning", "rninggood mo"
output: true


input: "abcde", "abccde"
output: false


*/