# CLASSLIST METHOD
## [JS-FILE](/js/67-classLIST-method.js)
> in this i want to tell you something n previus we leran add and remove but in this we learn 4 more methods of classlist 1 -> toggle(class) 2 -> contains(class) 3 -> item(index) 4 -> Length
---

> now first we talk about first method then others

### toggle(class)
> now i show u structure
```javascript
var c = document.getElementById("a1").addEventListener("click",abc)

function abc(){
    document.getElementById("a1").classList.toggle("xyz")
}
```
> toggle can repete event continius ly run remove run remove

---

### contains
> i show u structue
```javascript
var d = document.getElementById("a1").addEventListener("click",abc)

function abc(){
    document.getElementById("a1").classList.contains("xyz")
}
```
> contains told us true and false if class is exist then this will so us true oterwise false

---

### items(index)
>i show structure
```javascript
var e = document.getElementById("a1").addEventListener("click",abc)

function abc(){
    document.getElementById("a1").classList.item[0]
}
```
> item can show u indexwise becouse its contain array
---

### length
> i show you strucre
```javascript
var f = document.getElementById("a1").addEventListener("click",abc)

function abc(){
    document.getElementById("a1").classList.length;
}
```
> length show u the final length of your classes

---