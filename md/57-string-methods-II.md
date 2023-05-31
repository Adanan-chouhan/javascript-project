# STRING METHODs II
## [JS-FILE](/js/57-string-methods-II.js)
---

## 13-charAt();
> this method is usefull when u want to seleact a string word by their index
```javascript
var str = "my name is adnan chouhan";
var a = str.charAt(3);
document.write(a);
```
---

## 14-charCodeAt();
> 1st of all i want to tell about the sky table becouse without sky table this method is not usefull
![code image](/images/Screenshot%20from%202023-03-12%2022-57-16.png)
this is sky table each charachter have a number this table show that number but in this method we can find a number of your character
```javascript
var b = "my name is adnan chouhan";
var c = b.charCodeAt(4);
document.write(c);
```
---

## 15-fromCharCode();
> this also use sky table but in this u have to write a sky table number to find a character
```javascript
var d = String.fromCharCode(65);
document.write(d);
```
---

## 16-concat();
> this method is same as same to array's concat becouse these concate have only one mission that they want a combination of two strig and form in one string
```javascript
var e  = "my name is adnan chouhan ";
var f = "i am student of bca";
var g = e.concat(f);
document.write(g);
```
---

## 17-split();
> split is for remove a thing that u wanted to
```javascript
var h = "my name is adnan chouhan ";
var i = e.split("a");
document.write(i);
```
---

## 18-repeat();
> this method is for repeat thing like loop
``` javascript
var j = "my name is adnan chouhan ";
var k = j.repeat(3);
document.write(k);
```
---

## 19-slice();
> slice is for take a character from random places like index vise its contain two parameter 1st for start and 2nd for end
```javascript
var l = "my name is adnan chouhan ";
var m = l.slice(3,7);
document.write(m);
```
---

## 20-substr();
> this method is same as include becouse this is also have two parameter 1st for start and 2nd for end you can pick from middle of string
```javascript
var n = "my name is adnan chouhan ";
var o = n.substr(3,14);
document.write(o);
```
---

## 21-substring();
> this method same as substr but one differense between those two method and that is u can give two complete parameter but they cantain one incomplete string if ur index is of 10 this will show u only 9
```javascript
var p = "my name is adnan chouhan ";
var q = p.substring(11,16 );
document.write(q);
```
---

## 22-tostring();
> this method can make number into string
```javascript
var r = 50;
var s = r.toString();
document.write(s + 20);
```
---

## 23-valueof();
> this will not a important one becouse this may have a normal thing as campare as other method
```javascript
var t = "my name is adnan chouhan ";
var u = t.valueOf();
document.write(u);
```
---

#so complite string method

