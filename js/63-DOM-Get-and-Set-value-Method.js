document.write("<center><h1>DOM GET AND SET VALUE MRTHOD</h1></center>");
document.write("<br>");

document.write("<h1>get method</h1>");
var a = document.getElementById("a1").innerText;

// a = document.getElementById("a1").innerHTML;
// a = document.getElementById("a1").getAttribute("class");
// a = document.getElementById("a1").getAttributeNode("class").value;
// a = document.getElementById("a1").attributes[2].name;

document.write(a);

document.write("<h1>set method</h1>");
var b = document.getElementById("a1").innerText = "hlw i m adnan chouhan";

// b = document.getElementById("a1").innerHTML = "<h1>hlw i m danish</h1>";
// b = document.getElementById("a1").setAttribute("style","border : 1px solid red;");
// b = document.getElementById("a1").attributes[2].value = "xyz";
// b = document.getElementById("a1").removeAttribute("style");

document.write(b);