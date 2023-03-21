# SOME AND EVERY ARRAY METHOD
[JS-FILE](/js/45-some-and-every-array-method.js)

## some
> some method is use full when we want to add an adupt age verification becouse u can giv random number in some if some is equl to your number then u have answear is true otherwise false

```javascript
var ages = [10,12,15,18,20];
document.write(ages + "<br>" + "<br>");

var b = ages.some(checkAdult);
document.write(b + "<br>" + "<br>");

function checkAdult(age){
    return age >= 18;
}
```
---

## every
> in some and every method is same as same at comparision but there is differene between (every and some) (some) can show u true if u have one currect as of your value but in (every) we want all the values at equal as compare your value if we dont have then they show false

```javascript
var a = [25,49,98,110,18,145];
document.write(a + "<br>" + "<br>");

 var b = a.every(fn);
 document.write(b + "<br>" + "<br>");

 function fn(age){
    return age >= 18;
 }
```
---

