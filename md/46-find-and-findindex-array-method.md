# FIND AND FINDINDEX ARRAY METHOD
[JS-FILE](/js/46-find-and-findindex-array-method.js)
# find();
>what is find array method ?

>we use find() method return the value of the first element in an array that pass a test

```javascript
var ages = [10,23,19,20];
document.write( ages + "<br>" + "<br>");
var b = ages.find(checkadult);
document.write(b + "<br>" + "<br>");
function checkadult(age){
    return age >= 18;
}
```
---
# findindex();
> we use findindex() method return the index of the first element in an array that pass a test

```javascript
var ages = [10,23,19,20];
document.write( ages + "<br>" + "<br>");
var c = ages.findIndex(checkadult);
document.write(c + "<br>" + "<br>");
function checkadult(ag){
    return ag >= 18;
}
```
---
# the end
