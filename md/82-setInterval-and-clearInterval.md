# setinterval and clearinterval
## [JS-FILE](/js/82-setInterval-and-clearInterval.js)

> in this we learn about animation ther are 2 methods for animate 
* 1 -> setInterval 
* 2 -> clearInterval 
> so now lets begain

### setinterval
> in this interval we can set the aimation now first see the structure

```javascript
var a = 0;
setInterval(Anim,1000);

function Anim(){
    a = a + 10;
    var target = document.getElementById("test ");
    target.style.marginLeft = a + 'px';
}
```
> this is set interval what i do in this i will explain you step by step first i maaked a variable and named a inside a i give 0 becouse i want to add some valu and then i maked setInterval propertie acculy its contain two parameter 1 is function Name and 2nd is millisecond in this time will counts by millisecond and then a make a function name Anim and then inside of function i call one varible name target is target i putted id and then i call all properties in another line i call target . style this is a method of set intervel
---

###  clearinterval
> this is for when i want to stop interval so lets see the method

```javascript
var a = 0;
 var id = setInterval(Anim,1000);

function Anim(){
    a = a + 10;
 if(a === 580){
    clearInterval(id);
 }else{
    var target = document.getElementById("test ");
    target.style.marginLeft = a + 'px';
}
}
```
> in this all method is same but only we make if else in if we tell them if vaue reached this value then stop this
---



