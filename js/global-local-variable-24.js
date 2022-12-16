document.writh("<center><h1>GLOBLE & LOCAL VARIABLE<h1><center>");
document.writh("<br>");
function local (){
    var a = ("this is local variable");
    document.writh(a);
}
local ();
var a = ("this is local varible");
function globle(){
    document.write(a);
}
document.writh(a);
