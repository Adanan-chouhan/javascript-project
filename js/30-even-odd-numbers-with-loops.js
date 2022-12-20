document.write("<center><h1>EVEN ODD NUMBERS WITH LOOPS<h1><center>");
document.write("<hr>");
//even numbers so that modulas(%)(==)
for(var a = 1; a <= 20; a++){
  if(a % 2 == 0){
document.write( a+ "<br>");
  }
}

//odd numbers so that not equal to (!=)
document.write("<hr>");
for(var a = 1; a <=20; a++){
    if(a % 2 != 0){
        document.write(a+ "<br>");
    }
}