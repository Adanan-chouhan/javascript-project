document.write("<center><h1>FIND AND FINDINDEX ARRAY METHOD<h1><center>");
document.write("<br>");
var ages = [10,23,19,20];
document.write( ages + "<br>" + "<br>");
var b = ages.find(checkadult);
document.write(b + "<br>" + "<br>");
function checkadult(age){
    return age >= 18;
}

var ages = [10,23,19,20];
document.write( ages + "<br>" + "<br>");
var c = ages.findIndex(checkadult);
document.write(c + "<br>" + "<br>");
function checkadult(ag){
    return ag >= 18;
}