document.write("<center><h1>History object Method</h1></center>");

console.log(history);

function BackFunction(){
    history.back();
}

function forwardFunction(){
    history.forward();
}

function goFunction(){
    history.go(1);
}