# cloneNode Method
## [JS-FILE](/js/76-cloneNode-method.js)

> in this we can clone anythind i mean that we can copy and paste anything to them first u have to see the structure then i tell u that how i did

```javascript
var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(true);

console.log(copyElement);

document.getElementById("list2").appendChild(copyElement);
```
> so in this i telling u what i done 1st i maked 1 varianle and call into them getElementById and then call list1 in id and after calleing them i selected children in same line and index 0 then i maked 1 more variable and named him copyElement in inside of copyElement i given target and then i call cloneNode then i call true becouse we want elements and value boyh if we want only element then we use false then i direct call document.getElementById and then i select list2 in id and then i call append then inside of append i call copyElement becouse we want to append list2 with copyElement and copyElement is calling 0 index value

---


