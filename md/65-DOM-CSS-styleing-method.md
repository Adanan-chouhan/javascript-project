# DOM -> css styling method
## [JS-FILE](/js/65-DOM-CSS-styleing-method.js)

>so now we are going to learn about css styling with the help of DOM injs there are three(3)types of styling 1 -> style 2 -> className 3 -> classList
---
### style
```javascript
var a = document.equarySelector("#a1").style.backgroundColor ="red";
documenet.write(a);
```
>in this we are adding background color with the help of style in js

---

### ClassName
> in this we are going to know that how can we make a class in js with the help of DOM
```javascript
var a = document.quarySelector("#a1").className = ("xyz abc")

document.quarySelector("#a1").className;

document.write(a)
```
> as u see we maked in two class but we not given comma betwee two so i tell u that if u want to make two clases in one then you can make with the help of space this was maked from js i going to tell u that the class is nowt added to html page we direct maked from js
---

### ClassList
> in this we can make a list of your created classes from js from array

```javascript
var a = document.quarySelector("#a1").classList("xyz abc")

 document.quarySelector("#a1").classList

document.write(a);
```
>in this u are going to see that your maked classes are showing indexing wise
---
>now i telling you two mare method for classList 1 -> add 2 -> remove
---
---

### add
> we can add something from classList
```javascript
document.quarySelector("#a1").classList.add("fgh")

document.write(a)
```
>now u can see that u added new class to html ooo remember that you exist class in html otherwise it was not work
---

### remove
> it was opposite if u want to remove something from html then use this

```javascript
var a = document.quarySelector("#a1").classList.remove("fgh");

document.write(a)
```
> you can remove anything with the help of remove but remember that you have that in html
---




