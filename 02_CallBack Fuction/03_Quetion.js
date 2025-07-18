// Create a custom function that mimics forEach using a callback.    

function customForEach(arr, callback){
    for(let i = 0; i <arr.length; i++){
        callback(arr[i], i);
    }
}

customForEach([10,20,30], (val, index) => {
    console.log(`Index ${index}: ${val}`)
});