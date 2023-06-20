
var newElement = document.createElement("h1");
var newText = document.createTextNode("adnan chouhan");
newElement.appendChild(newText);
console.log(newElement);


var newElement = document.createElement("h1")

var newText = document.creatTextNode("hlw i m adnan chouhan");

newElement.appendChild("newText");


 var target = document.getElementByid("al");

newElement.insertBefore(newElement,target.childNodes[0]);
console.log(newElement);