document.write("<center><h1>NESTED LOOP<h1><center>");
document.write("<br>");
for(var a = 1; a <= 5; a++){
    for(var b = 1; b <= a; b++){
        document.write( b + " ");
    }
    document.write("<br>");
}

// now we learn second example  
document.write("<hr>");
for( var a = 5; a >= 1; a-- ){
    for(var b = 1; b <= a ; b++ ){
        document.write(a + " ")
    }
    document.write("<br>")
}
// now we learn third example
document.write("<hr>");
for( var a = 5; a >= 1; a-- ){
    for(var b = a; b >= 1 ; b-- ){
        document.write(b + " ")
    }
    document.write("<br>")
}