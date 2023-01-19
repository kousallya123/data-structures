/* -------------------------------------------------------------------------- */
/*                             Two sum Leetcode 1                             */
/* -------------------------------------------------------------------------- */
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

//space complexity-O(1)
//time complexity-O(n)^2

let nums=[1,4,5,6,4,3]
let target=8

function twoSum(nums,target){
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            if(nums[i]+nums[j]===target) return console.log([i,j])
        }
    }
}


//space complexity-O(n)
//time complexity-O(n)

function twosum(nums,target){
    let memory={};
    for(let i=0;i<nums.length;i++){
        if(memory[nums[i]]===undefined){
            memory[target-nums[i]]=i
        }else{
            return console.log(memory[nums[i]],i);
        }
    }
}
twoSum(nums,target)
twosum(nums,target)