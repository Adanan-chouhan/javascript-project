document.write("<center><h1>NESTED LOOP<h1><center>");
document.write("<br>");
for(var a = 1; a <= 100; a = a+10){
    for(var b = a; b < a+10; b++){
        document.write(b+" ");
    }
    document.write("<br>");
}