# CONCAT AND JOIN ARRAY METHOD
[JS-FILE](/js/40-concat-and-join-method.js)
# concat();
>first we talk about concat() so cancat stands to join 2 arrays in one example --> if u create one array --> ["adnan","fayyaz"] and u create one more array --> ["arbaaz","mujahid"] and u want to marge these two array then u have to use concat() arrays so the pattern to write this in internal is

```javascript
var a = ["adnan","fayyaz"];
var b = ["arbaaz","mujahid"];
var c = a.concat(b);
document.write(c);
```
---
# join();
now we talk about join() so if u want to make multiple strings in one string and remove commas then u use join() method so the pattern is
```javascript
var a = ["adnan","fayyaz"];
var b = ["arbaaz","mujahid"];
var c = a.concat(b);
document.write(c + "<br>" + "<br>");
var d = c.join(" - ")
document.write(d);
```
---
## the end
