document.write("<center><h1>FILTER ARRAY METHOD<h1><center>");
document.write("<br>");
var ages = [10,26,15,20,19];
document.write(ages + "<br>" + "<br>");
var b = ages.filter(ac);
document.write(b);
function ac (age){
 return   age >= 18;
}
