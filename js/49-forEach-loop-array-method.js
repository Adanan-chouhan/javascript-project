document.write("<center><h1>FOREACH LOOP ARRAY METHOD<h1><center>");
document.write("<br>");
var a = ["adnan","arbaaz","mujahid","danis","fayyaz"];
a.forEach(loop);

function loop(value,index){
    document.write(index + " : " + value + "<br>");
}

var b = ["adnan" , "arbaaz" , "fayyaz" , "ayyaz"]
b.forEach(fn)
function fn(value , index){
    document.write(index + " - " + value +"<br>")
}
