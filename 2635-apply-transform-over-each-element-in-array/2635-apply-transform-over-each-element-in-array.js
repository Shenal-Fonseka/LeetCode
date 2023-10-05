var map = function(arr, fn) {
    let returnedArray = []
    
    for (let i=0; i < arr.length; i++){
        const returnedValue = fn(arr[i], i)
        returnedArray.push(returnedValue)
    }
    return returnedArray
    
};