# appendChild and insertBefore method
## [JS-FILE](/js/73-appendChild-and-insertBefore-method.js)

> THERE ARE TWO METHOD TWO COMBILE CREAT ELEMENT AND CREATNODES 
 * 1ST -> appendchild 
 * 2ND -> insertbefore 
 >1st we are goin to lear about appendchild

### appendChild
> so append method is use for combine two things the structure is
```javascript
var newElement = document.createElement("h1");
var newText = document.createTextNode("adnan chouhan");
newElement.appendChild(newText);
console.log(newElement);
```
> these two variables are now append eachothers
---

### insertBefore
> insert before can give location to your html where u wanted to show becouse js is pasted at end point then your work is showen in the end so you have to add insertbefore to give location to them the structure is
```javascript
var newElement = document.createElement("h1")

var newText = document.creatTextNode("hlw i m adnan chouhan")

newElement.appendChild("newText");


 var target = document.getElementByid("al");

newElement.insertBefore(newElement,target.childNodes[0]);
console.log(newElement);
```
---



