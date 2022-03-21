/*

input: "sweet potato"

output: "swet poa"

*/


function dedupeString(str){
    //create an object
    let obj ={}
    let newStr= ""
    //loopthrough and access each character in the string
    for(let x=0; x < str.length; x++){
        // console.log(str[x])
        obj[str[x]] = true
    } 
    // console.log(Object.keys(obj))
    for(const key in obj){
        // console.log(key)
        newStr += key
    }
    return newStr
} 


// console.log(dedupeString("sweet potato")) //"swet poa"
console.log(dedupeString("good morning")) 





// let someObj = {}

//create a key called "a" in the object with the value of "true"
// someObj['a'] = true;
// someObj['first_name'] = "Gianni";
// someObj['a'] = "wazzaa"


//check to see if a key exists in an object
// console.log(someObj['a'] != undefined)

// console.log(someObj)