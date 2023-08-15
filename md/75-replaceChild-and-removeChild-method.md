# replaceChild and removeChild method
## [JS-FILE](/js/75-replaceChild-and-removeChild-method.js)

> in this we can replace something or remove someting first we talk about to replace

### replaceChild
> first i want to show u a structure

```javascript
 var newElement = document.createElement("li");
 var newText = document.createTextNode("adnan-chouhan");

 newElement.appendChild(newText);

 var target = document.getElementById("list");
 var oldElement = target.children[0];

 target.replaceChild(newElement,oldElement);
```
> now i tell u what i done in this replce method 1st i make variable a then iside of a i created an element and then i created one more variable and name her b then inside of b i created text then i make them append then i make 1 more variable and named her c and inside of c i called get element by id and then i maked 1 more variable and name her d and inside of d i call c and then added children and indexing her 0 becouse i want to put the value of 0 remove and then i called c one more time but in another line then i called replaceChild at front of c and then give the names to parameter i want to tell u that its contain 2 parameter 1 is (which) and second is (who) (which , who); so i called (a , d) becouse i want to change my text with d

---

### removeChild
> in this we can remove any thing first u have to see structure then i explain u

```javascript
var a = document.getElementById("list");
var b = a.children[0];

a.removeChild(f);
```
> in this i will do these things 1st i make 1 variable and named e in inside of e i give elementID and then i maked one more variable and named f in inside of f i call e then i call children property and then index of those i want to remove then i call e one more time in another line then i called removeChildand give parameter of that i want to remove in this we have only one parameter and thats is remove if u want to remove something then call inside of parameter
---

