document.write("<center><h1>NUMBER METHOD</h1></center>");
document.write("<br>");

document.write("<h1>NUMBER</h1>");
var str = "99";
var num = Number(str);
document.write(num + 10);
document.write("<hr>");

document.write("<h1>parseInt</h1>");
var a = "10 20 30";
var b = parseInt(a);
document.write(b);
document.write("<hr>");

document.write("<h1>parseFloat</h1>");
var c = "99.10";
var d = parseFloat(c);
document.write(d);
document.write("<hr>");

document.write("<h1>isfinite</h1>");
var d = 100;
var e = Number.isFinite(d);
document.write(e);
document.write("<hr>");

document.write("<h1>isInteger</h1>");
var f = 10;
var g = Number.isInteger(f);
document.write(g);
document.write("<hr>");

document.write("<h1>toFixed</h1>");
var h = 5.56789;
var i = h.toFixed(3);
document.write(i);
document.write("<hr>");

document.write("<h1>toprecision</h1>");
var j = 10.201918
var k = j.toPrecision(10)
document.write(k)
document.write("<hr>");



