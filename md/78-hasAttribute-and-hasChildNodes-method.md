# hasAttribute and hasChildNodes method
## [JS-FILE](/js/78-hasAttribute-and-hasChildNodes-method.js)

> in thes we can find bollean there are two method in this 
* 1 -> hasAttribute
* 2 -> hasChildNodes  
> in this first we learn 1st and then others

### hasAttribute

```javascript
var target = document.getElementById("main");
var find = target.hasAttribute("id");
console.log(find);
```
> in this we are searching that something contains or not if contains then its show true oterwise false

---

### hasChildNodes
> in this we can nit do anything becouse its exist automaticaly if something contains in your value its show true othervise false

```javascript
var a = document.getElementById("main");
var b = a.hasChildNodes();
console.log(b);
```
> all methods are same but you have to add hasChildNodes at the space of hasAttribute
---