# STRING METHODS
[JS-FILE](/js/56-string-methods.js)

|string|
|-----|
|length|
|toLowerCase|
|toUpperCase|
|include|
|startsWith|
|endsWith|
|search|
|match|
|indexOf|
|LastindexOf|
|replace|
|trim|
|charAt|
|charCodeAt|
|fromCharCode|
|concat|
|split|
|repeat|
|slice|
|substr|
|substring|
|toString|
|valueOf|

# 1-length
>this is property that only find the lenght of string it means this can count all string property and one more thing that length can count space too
```javascript
var str = "hello i m adnan chouhan i m student of bca";
var a = str.length;
document.write(a);
```
---
# 2-toLowerCase();
> this method is usefull when u want to write all string latter in small latter
```javascript
var b = "Hello I m Adnan Chouhan I m Student Of Bca";
var c = b.toLowerCase();
document.write(c);
```
---
# 3-toUpperCase();
> this method is usefull when we want to make our all string latter in capital form
```javascript
var d = "hello i m adnan chouhan i m student of bca";
var e = d.toUpperCase();
document.write(e);
```
---
# 4-includes();
> includes show us that the value we want to see is available or not if vailable then this show us true otherwise false
```javascript
var f = "hello i m adnan chouhan i m student of bca";
var g = f.includes("adnan");
document.write(g);
```
---

# 5-startsWith();
>this will show u what value u want to see is available or not at starting or not if have then show true othervise false
```javascript
var h = "hello i m adnan chouhan i m student of bca";
var i = h.startsWith("hello");
document.write(i);
```
---

# 6-endsWith();
> this will show u what u want to see is avalaible or not at end pint if then this show true othervise false
```javascript
var j = "hello i m adnan chouhan i m student of bca";
var k = j.endsWith("ca");
document.write(k);
```
---

# 7-search();
> this will show u the correct index of ur string what are u searching is this is same as same include but include show us true or false but this show us a index of the word
```javascript
var l = "hello i m adnan chouhan i m student of bca";
var m = l.search("adnan");
document.write(m);
```
---

# 8-match();
> this will make new array of duplicate words like what u want to see one more thing in tis we not use opening dots we use (forword slash like this and speacialy of g (g) is a special word that find a word globally like this (a.match(/i/g) )
```javascript
var n = "hello im adnan chouhan im student of bca";
var o = n.match(/im/g);
document.write(o);
```
---

# 9-indexOf();
> this will help u to find index of ur word that u want to see like this
```javascript
var p = "hello im adnan chouhan im student of bca";
var q = p.indexOf("im");
document.write(q);
```
---

# 10-LastindexOf();
> this will help u to find index of ur word that u want to find but from backside
```javascript
var r = "hello im adnan chouhan im student of bca";
var s = r.lastIndexOf("im");
document.write(s);
```
---

# 11-replace();
> this will help u to replace ur word with another word but this contain two type of parameter (replace from , replace with)
```javascript
var t = "hello im adnan chouhan im student of bca";
var u = t.replace("adnan","arbaaz");
document.write(u);
```
---

# 12-trim();
> this will help u to trim extra spaces like if u added more then space u want then use it
```javascript
var p = "       hello       ";
var w = p.trim();
document.write(w);
```
---
