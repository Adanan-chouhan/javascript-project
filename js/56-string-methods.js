document.write("<center><h1>STRING METHODS</h1></center>");
document.write("<br>");
document.write("<h1>1-sting length</h1>");
var str = "hello i m adnan chouhan i m student of bca";
var a = str.length;
document.write(a);
document.write("<hr>");

document.write("<h1>2-toLowerCase</h1>");
var b = "Hello I m Adnan Chouhan I m Student Of Bca";
var c = b.toLowerCase();
document.write(c);
document.write("<hr>");

document.write("<h1>3-toUpperCase</h1>");
var d = "hello i m adnan chouhan i m student of bca";
var e = d.toUpperCase();
document.write(e);
document.write("<hr>");

document.write("<h1>4-includes</h1>");
var f = "hello i m adnan chouhan i m student of bca";
var g = f.includes("adnan");
document.write(g);
document.write("<hr>");

document.write("<h1>5-startsWith</h1>");
var h = "hello i m adnan chouhan i m student of bca";
var i = h.startsWith("hello");
document.write(i);
document.write("<hr>");

document.write("<h1>6-endsWith</h1>");
var j = "hello i m adnan chouhan i m student of bca";
var k = j.endsWith("ca");
document.write(k);
document.write("<hr>");

document.write("<h1>7-search</h1>");
var l = "hello i m adnan chouhan i m student of bca";
var m = l.search("adnan");
document.write(m);
document.write("<hr>");

document.write("<h1>8-match</h1>");
var n = "hello im adnan chouhan im student of bca";
var o = n.match(/im/g);
document.write(o);
document.write("<hr>");

document.write("<h1>9-indexOf</h1>");
var p = "hello im adnan chouhan im student of bca";
var q = p.indexOf("im");
document.write(q);
document.write("<hr>");

document.write("<h1>10-lastIndexOf</h1>");
var r = "hello im adnan chouhan im student of bca";
var s = r.lastIndexOf("im");
document.write(s);
document.write("<hr>");

document.write("<h1>11-replace</h1>");
var t = "hello im adnan chouhan im student of bca";
var u = t.replace("adnan","arbaaz");
document.write(u);
document.write("<hr>");

document.write("<h1>12-trim</h1>");
var p = "       hello       ";
var w = p.trim();
document.write(w);
document.write("<hr>");









