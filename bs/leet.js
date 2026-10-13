/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums, n ) {
    let newlist= 0;
    let og = 0;
    for(let i=1; i<=n ; i++){
        newlist ^=i 
    }
    for(const num of nums){
        og ^=num
    }
    const diff = newlist ^ og //the binary of the different one
    

    
};

console.log([1,2,2,4], 4)