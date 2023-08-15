# insertAdjecent and insertAdjecentHTML method 
## [JS-FILE](/js/74-insertAdjecent-and-insertAdjecentHTML-method.js) 
> there are 3 method to direct creat and appends 1st -> insertAdjecentElement 2nd -> insertAdjecentHTML 3RD -> insertAdjecentText now i talk first method then i talk other

### insertAdjecentElement
> you know that we make then we do append now the method is changed now we can do anything with the use of insert adjecent

> the method for this this can make only elements and append this will not add text so this is pattern

```javascript
var a = document.createElement("h1")
var b = document.createTextNode("hlw i m danish chouhan")

a.appendChild(b)
var c = document.getElementById("a1")

c.insertAdjacentElement("afterbegin",a)
```
> now i tell u one more thing there are 4 method to show them there 1st - beforebegin 2nd - afterbegin 3rd - beforeending 4th - afterending these method are usable like this
![positions](/images/Screenshot%20from%202023-03-20%2017-54-04.png)
so we add two parameter first is location and second is which one ypu want to add
---

### insertAdjecentHTML
> in this we cn add into one line the method id
```javascript
var c = document.getElementById("a1")

var d = "<h2>hlw this is only test</h2><br><p>i m just testing the data</p>"

c.insertAdjacentHTML("afterbegin",d)
```
> in this we can add into one line and tats our question? so i tell u how firs make variabe and call getElementById and then make one more variable and write text with element direct into doubledots and now make insertadjecent and first call the 1st variable and give property of adjecent and then make parameter in the parameter 1st add location and then after comma add which u want to append
---

### insertAdjecentText
> all method is same but you write insertAdjecentText to the possition of insert adjesent so the pattern is
```javascript
var c = document.getElementById("a1")
var e = "test is over now"

c.insertAdjacentText("afterbegin",e)
```
> this is insertText method
---





