document.write("<center><h1>addEventListner-method</h1></center>");
document.write("<br>");
var a = document.getElementById("a1").addEventListener("click",abc);

function abc(){
    document.getElementById("a1").style.backgroundColor = "red"
}

var b = document.getElementById("a1").addEventListener("dblclick",function(){
    document.getElementById("a1").style.border = "1px green solid"
});


var c = document.getElementById("a1").romoveEventListener("click",function(){
    document.getElementById("a1").removeEventListener("click",abc)
});
Footer
