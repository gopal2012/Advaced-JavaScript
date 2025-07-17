let num = prompt("Guess number");
while(true){
    if(num === 5){
        alert("Matched");
        break;
    }
    else {
        num = prompt("Enter again");
    }
}