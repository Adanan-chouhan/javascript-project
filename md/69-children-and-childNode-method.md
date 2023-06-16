# children and childNodes 
## [JS-FILE](/js/69-children-and-childNode-method.js)
> now we talk about 3d nd 4th method

### children
> children is oposite brother of parent it may show you value of child you have to select parent then its may select child now i tell u structure
```javascript
var a = document.getElementById("inner").children.style.background = "red";

console.log(a);
```
> all methods are same but u have to write children on parent position
---

### childNodes
> child nodes can also show the text now i show u structure

```javascript
var a = document.getElementById("inner").childNodes[2];

console.log(b);
```
> child nodes also contain indexing of array
---