document.write("<center><h1>SOME ARRAY METHOD<h1><center>");
document.write("<br>");
var ages = [10,12,15,18,20];
document.write(ages + "<br>" + "<br>");

var b = ages.some(checkAdult);
document.write(b + "<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
document.write("<hr>");

document.write("<center><h1>EVERY ARRAY METHOD<h1><center>");
document.write("<br>");
var a = [25,49,98,110,18,145];
document.write(a + "<br>" + "<br>");
 var b = a.every(fn);
 document.write(b + "<br>" + "<br>");
 function fn(age){
    return age >= 18;
 }

