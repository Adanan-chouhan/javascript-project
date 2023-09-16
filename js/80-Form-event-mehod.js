
function focusFunction(element){
element.style.background = "pink";
}

function blurFunction(element){
    element.style.background = "";
}

function inputFunction(element){
    var x = element.value;
   document.getElementById("test").innerHTML = x;
}