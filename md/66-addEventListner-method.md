# addEventListner-Method
## [JS-FILE](/js/66-addEventListner-method.js)
> in this method u can give events from js not from html in previus we are useing event on hml now we do this in js there are to method 1 -> addEventListner 2 -> removeEventListner now first we talk about addEventListner

### addEventListner
>now get start first i want to tell u structure
```javascript
var a = document.getElementById("a1").addEventListner(click,function(){
    document.getElementById("a1").style.border = "1px solid black"
});
```
>now i explain u what i done in this first i make variable then i call getElementById then i call addEventListner EVENT LISTNER HAVE TO PARAMETER 1st EVENT AND 2nd is function in this i maked internal function then inside the funtion i maked style border
---
>now i tell you 2nd function

### removeEventListner
>this method is oposite brother of addeventlistner this can remove eventlistner now i show u structure of removeEventListner
```javascript
var c = document.getElementById("a1").romoveEventListener("click",function(){
    document.getElementById("a1").removeEventListener("click",abc)
});
```
> now i tell u what i done in this first i maked variable then call getelementbyid then i call remove event listner also in this have two parameter then i make event and make function in paramerer of eventlistner then inside of function i call one more time full method then give name and event of those i want to remove

---

