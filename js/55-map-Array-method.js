document.write("<center><h1>MAP ARRAY METHOD<h1><center>");
document.write("<br>");
var a = [3,6,4,9,10];
var b = a.map(test);
document.write(b + "<br>" + "<br>");

function test(x){
    return x * 10;
}

// array to object
var ary = [
   {fName : "adnan", lName : "chouhan"},
   {fName : "arbaaz", lName : "chouhan"},
   {fName : "fayyaz", lName : "kilji"}
];
var b = ary.map(Name);
document.write(b);

function Name(a){
    return a.fName + " " + a.lName + "<br>";
}