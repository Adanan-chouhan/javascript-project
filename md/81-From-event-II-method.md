# FROM EVENT II METHOD
## [JS-FILE](/js/81-From-event-II-method.js)

>in previuse we clear 1 , 2 , 3 , 4 , 5 , 6 in this we do 7 , 8 , 9 ,10 so lets begain

### change-method
> in this method trigeer is when we we tap to another side so lets see the structure first we add onchange() property to form and now i show u js structure

```javascript
function chengeFunction(element){
    var x = element.value;
    document.getElementById("test").innerHTML = x;
}
```
> in this we see our input when we write and tap to anoter side in this input will not showen imidiate
---

### select-method
> in this if u select something this will show what u want first we see the structure we add onselect() property first in html now i show u structure of js

```javascript
function selectFunction(){
    console.log("you select some text");
}
```
> this will showen when u select something
---

### submit-method
> in this if u tap to submit then the value showen with your added thing so lets see the structure first we add onsubmit() property to html form attribute then i told u the structure of js

```javascript
function submitFunction(){
    var x = document.getElementById("name").value;
    alert("hello" + " " + x);
}
```
> in this we add name value to soo when the pop is shown the name that we aded is aded automtically
---

### invalid-method
> this method is showen when we not write something properly so lets see the structure first we add oninvalid() in invalid property we write the text we want becouse in this we can write direct

```javascript
oninvalid = "alert('please enter the correct email')";
```
> in this i added email
---
