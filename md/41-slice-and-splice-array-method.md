# SLICE AND SPLICE ARRAYS METHOD
[JS-FILE](/js/41-slice-and-splice-array-method.js)
# slice();
>in slice we can make a new arraw from another array we have some example like this
```javascript
var a = ["fayyaz","adnan","danis","arbaaz","mujahid"];
document.write(a + "<br>" + "<br>");
```
---
>this is a normal array but we are here to know about slice array so we take all example for this normal array
```javascript
var a = ["fayyaz","adnan","danis","arbaaz","mujahid"];
document.write(a + "<br>" + "<br>");
 var b = a.slice(1,4);
document.write(b+ "<br>" + "<br>");

```
---
>in this we talk about 1 prametere you learn that slice have two parameter (start , end ) but here we lerning for one parameter and its like this (start) this this will only start were form u want and end with last word becouse in this we only starting not ending
```javascript
var a = ["fayyaz","adnan","danis","arbaaz","mujahid"];
document.write(a + "<br>" + "<br>");
 var b = a.slice(-4);
document.write(b+ "<br>" + "<br>");

```
---
>in this we are larning about mynus ( - ) indexing its mean all start from backword like this ( -5 , -4 , -3 , -2 , -1 ,)

---
# splice();
if we want to add some new value in existing array then we use splice method in this there are 3 condition to run this (index , how many delete , value ) in this first they ask that what index i will paste this and in second they ask you want to delete after pasting new value and in last they ask that which value i paste

```javascript
var a = ["fayyaz","adnan","danis","arbaaz","mujahid"];
document.write(a + "<br>" + "<br>");
a.splice(2,0,"ayyaz","sulman");
document.write(b);

```
>in this we saying that the value we named rajesh paste this in 1 number index and then we dont want to delete something then we write 0
---
##the end

