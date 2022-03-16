/*
given a string with repeated consecutive characters, return the amount of each character as such:


input: "aaabbbbcdd"

output: "a3b4c1d2"



*/


function encode(str){
    let output = ""
    let currChar = str[0]
    //print out each letter from the string
    let obj = {}
    for (let i = 0; i < str.length; i++){
        if(str[i] in obj){
            obj[str[i]] += 1;
        }else{
            
            obj[str[i]] = 1;
        }
    }
    for(const key in obj){
        output += key + obj[key]
    }
    return output
}


console.log(encode("aaabbbbcdd")) //"a3b4c1d2"