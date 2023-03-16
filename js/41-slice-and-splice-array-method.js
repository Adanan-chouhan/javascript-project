document.write("<center><h1>SLICE AND SPLICE ARRAYS METHOD<h1><center>");
document.write("<br>");
var a = ["fayyaz","adnan","danis","arbaaz","mujahid"];
document.write(a + "<br>" + "<br>");
 var b = a.slice(1,4);
document.write(b+ "<br>" + "<br>");
b.splice(2,0,"ayyaz","sulman");
document.write(b);

