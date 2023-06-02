# NUMBER METHOD
## [JS-FILE](/js/58-Number-methods.js)
>WE TALK ABOUT THESE METHODS
---

|NUMBER METHOD|
|------------|
|Number();|
|ParseInt();|
|ParseFloat();|
|isFinite();|
|isInteger();|
|toFixed();|
|toPrecision();|
---
## Number();
> this will show u the number option from string
```javascript
var str = "99";
var num = Number(str);
document.write(num + 10);
```
---

## parseInt();
>parseint can not show the dicimal number if this contain 3 to 4 value it may show the first value
```javascript
var a = "10 20 30";
var b = parseInt(a);
document.write(b);
```
---

## ParseFloat();
>this is oposite brother of parseint becous this may contain decimal number too and this may contain 2 to 3 value
```javascript
var c = "99.10";
var d = parseFloat(c);
document.write(d);
```
---

## isFinite();
> this may wants the finite value its mean if u have a number value then this will show u true and if not then is show u false
```javascript
var d = 100;
var e = Number.isFinite(d);
document.write(e);
```
---

## isInteger();
> it may find the integer i think thas is the same as parsint becouse its may could not contain the decimal
```javascript
var f = 10;
var g = Number.isInteger(f);
document.write(g);
```

## toFixed
> to fixed value is to fixed with more number that are after point
```javascript
var h = 5.56789;
var i = h.toFixed(3);
document.write(i);
```
---

## toprecision();
>if u want mare 0 zaros after desimal then us this method
```javascript
var j = 10.201918
var k = j.toPrecision(10)
document.write(k)
```
---
## The End Number Method