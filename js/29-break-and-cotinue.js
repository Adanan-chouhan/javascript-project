document.write("<center><h1>CONTINUE<h1><center>");
document.write("<br>");
//use continue tag
for(var a = 1; a <= 10; a++){
    if(a == 4){
        document.write("continue:"+a+"<br>");
        document.write("<hr>");
        continue;
    }
    document.write("number:"+a+"<br>");
    document.write("<hr>");
}
//use break tag
document.write("<center><h2>BREAK<h2><center>");
document.write("<br>");
for(var a = 1; a <= 10; a++){
    if(a == 4){
        document.write("break:"+a+"<br>");
        break;
    }
    document.write("number:"+a+"<br>");
}