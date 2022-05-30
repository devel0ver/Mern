const twoSum = (nums, target) => {
    // ...
    //create a variable that stores an object
    var storage = {}
    // loop through the array
    for (let i = 0; i < nums.length; i++){
        if(storage[nums[i]] !== undefined){
            console.log([storage[nums[i]], i]);
        }
        storage[target-nums[i]] = i
    }
    console.log(storage)
}

twoSum([2,4,7,15], 9)

//Example
/*

[2,11,7,15]
i = 0, 1, 2, 3
nums[i] = 2, 11, 7, 15

storage = {
    '7': 0,  
    '5': 1,
    '2' : 2, 
    '-6' : 3
}
*/