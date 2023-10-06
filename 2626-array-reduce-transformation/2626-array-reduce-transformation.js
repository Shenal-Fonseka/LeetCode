
var reduce = function(nums, fn, init) {
    if (nums.length === 0){
        return init
    } else {
        val = init
        for (let i=0; i < nums.length; i++){
            val = fn(val, nums[i])
        }
        return val
    }
};

