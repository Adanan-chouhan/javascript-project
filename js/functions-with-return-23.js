document.write("<center><h1>FUNCTIONS WITH RETURN<h1><center>");
document.write("<hr>");
function fullname(fname = "YAHOO",Iname = "Baba"){
    var a = fname + " - "+ Iname;

    return a;
}
 var fn = fullname("Adnan","chouhan");
 document.write(fn);