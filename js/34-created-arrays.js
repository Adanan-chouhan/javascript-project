document.write("<center><h1>created array<h1><center>");
document.write("<br>");
var ary = new Array (5);
for(var g = 0; g < 5; g++){
    ary[g] = prompt("enter the value :");
}

document.write("<ul>");
for(var a = 0 ; a < 5; a++){
    document.writh("<li>" + ary[a] + "</li>");
}
document.write("</ul>");
