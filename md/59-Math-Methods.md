# MATH METHODS
## [JS-FILE](/js/59-Math-Methods.js)

|math methods|
|-----------|
|ceil()|
|floor()|
|round()|
|trunc()|
|max(x,y,z,...,n)|
|min(x,y,z,...,n)|
|sqrt(x)|
|cbrt(x)|
|pow(x,y)|
|random()|
|abs(x)|
|PI|

---

## ceil();
> this method name is ceil and this can give uyou a number of upper poin that i mean if we write (1.233) then this give us 2 becouse if we add any number in decimal form then this will give u uper number
```javascript
var a = Math.ceil(5.18);
document.write(a);
```
---

## floor
> this is opposit brother of ceil becose this will give u a lowwer value as u know that ceil give u a upper value but in this we get loower value i mean that (2.333) then this will give us (2)
```javascript
var b = Math.floor(3.17);
document.write(b);
```
---

## round();
> this will give u a round number i mean that if u have 40 after poin(1.40) the this will give u a (1) and if u have a value of 60 after poin(1.60)then this will give u 2
```javascript
var c = Math.round(4.60);
document.write(c);
```
---

## trunk
> trunc will help to remove digits after point i mean that if u give a (1.299)this will give u a (1)this will help to remove digit after poin
```javascript
var d = Math.trunc(6.19);
document.write(d);
```
---

## max();
> this will acces all number but give u single number and that is bigger number
```javascript
var e = Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.write(e);
```
---

## min();
> this is opposite brother of max this will give u a lowest number
```javascript
var f = Math.min(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
document.write(f);
```
---

## sqrt();
> this is sprt full form is (squar root) it will give u a squar root of number ex - > 5 * 5 = 25 this is a root of 5
```javascript
var g = Math.sqrt(25);
document.write(g);
```
---

## cbrt();
> this is cbrt full form is ( cube root ) it will give u a cube root of number ex -> 5 * 5 * 5 = 125 this is cube root of 5
```javascript
var h = Math.cbrt(125);
document.write(h);
```
---

## pow();
> this will have 2 parameter one table and second square (value , square of)
```javascript
var i = Math.pow(2,3);
document.write(i);
```
---

## random();
> this will give u random value it may have a formula => math.floor(Math.random()* 100)+ 2
```javascript
var j =  Math.floor(Math.random( ) * 100 + 1);
document.write(j);
```
---

## abs();
```javascript
var k =  Math.abs(2 + 5);
document.write(k);
```
---

## PI
> this is not a mathod this is a property . if u want to multiply the number with pi then use it
```javascript
var l =  Math.PI;
document.write(l);
```

