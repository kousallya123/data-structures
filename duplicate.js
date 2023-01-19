/* -------------------------------------------------------------------------- */
/*                                 Leetcode 217                               */
/* -------------------------------------------------------------------------- */


//time complexity=O(n)
//space complexity=O(n)
function containDuplicate(nums){
    let memory={}
    for(let i=0;i<nums.length;i++){
        if(memory[nums[i]]===undefined){
            memory[nums[i]]="ameen"
        }else{
            return console.log("true"); 
        }
    }
    return console.log("false");
}
nums=[1,2,3,4,5,5]
containDuplicate(nums)

//time complexity=O(n)
//space complexity=O(1)

function containduplicate(nums){
    nums.sort((a,b)=>{return b-a})
    for(let i=0;i<nums.length;i++){
        if(i>0&&nums[i-1]===nums[i]) return console.log(true)
    }
    return console.log(false)
}

containduplicate(nums)
