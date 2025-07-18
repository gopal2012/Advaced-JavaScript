// Use a callback function inside setTimeout.

function delayMessage(callback){
    setTimeout(callback,1000);
}

delayMessage(() => {
    console.log("Hello after 1 Second");
});