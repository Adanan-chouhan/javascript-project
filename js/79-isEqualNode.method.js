
var target1 = document.getElementById("list1").children[1];
var target2 = document.getElementById("list2").children[0];

var equal = target1.isEqualNode(target2);
console.log(equal);