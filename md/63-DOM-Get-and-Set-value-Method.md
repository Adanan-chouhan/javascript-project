# DOM -> GET AND SET METHOD
## [JS-FILE](/js/63-DOM-Get-and-Set-value-Method.js)

>in this we ar going to learn that how to get and set the value in DOM there are 5 methods of get 1 -> innerText 2 -> innerHTML 3 -> getAttribute 4 -> getAttributeNode 5 -> Attribute
---
 ## DOM -> GET VALUE

 ### innerText
 > in this u can see all text without any html tages if u think to get something of text type from html then use this

 ```javascript
var a = document.getElementById('ID').innertext;
document.write(a);
 ```
 ---

### innerHTML
>in this u can see all html tags with your text if u think to do something in html tags then use this

```javascript
var a = document.getElementById('ID').innerHTML;
document.write(a);
```
---

### getAttribute
>in this u can see that you can get value of any attribute that's the way to use it

```javascript
var a = document.getElementById('ID').getAttribute("class");
document.write(a);
```
---

### getAttributeNode
>in this u can see that you can get attribute name with attribute value now i tell u that's the way to use it

```javascript
var a = document.getElementById('ID').getAttributeNode("class").value;
document.write(a);
```
---
> s u know that DOM have 2 types (get) and (set) in previus we learn about get you know that you can get any thing with the help of get method now we have to edit before changes update so we are going to take use of (set)
---

## DOM -> SET VALUE
>there are 5 Methods of DOM set value 1 -> innerText 2 -> innerHTML 3 -> setAttribute 4 -> Attribute 5 -> removeAttribute
---

### (set)innerText
>as you know that how to get value now i tell u how to set value

```javascript
var a = document.getElementById('ID').innerText = "hlw i m adnan chouhan";
document.write(a);
```
>that's very simple just use eqal sing and write what u want to change in dots at front of equal sing
---

### (set)innerHTML
> as u know that u can change only change the text but if u want to change them with tags of HTML then us this

```javascript
var a = document.getElementById('ID').innerHTML = "<h1>hlw i m danish</h1>";
document.write(a);
```
>that's all are same only u have to add tags inside dots at front of equal sing
---

### setaAttribute
> this is oly form change attribute inside of html tags from js but there are two prameter inside this (name , change value)

```javascript
var b = document.getElementById("a1").setAttriute("class","hlw");
document.write(b);
```
---

### Attribute
>this may changed in short but u ham=ve to learn indexing becouse its may work like from array

```javascript
var b = document.getElementById("a1").Attribute[1].value  = "hlw";
document.write(b);
```
---

### removeAttribute
> its work to remove attributes its may work like this

```javascript
var b = document.getElementById("a1").RemoveAttribute("style");
document.write(b);
```
---



