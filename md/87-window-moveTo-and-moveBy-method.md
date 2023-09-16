# window moveTO and moveBy method
## [JS-FILE](/js/87-window-moveTo-and-moveBy-method.js)

> in this we are learning about how to give position from left and top so first we learn about moveTo

### moveTo
> in this i have to show u structure first in this we use previes thing name openWindow() function in this i will expain u moveTo() in this we make a button named move and give a event on click to them now i explain u the structure of js

```javascript
var myWindow;

function openWindow(){
   myWindow = window.open("","_blank","width=500px,height=300px");
   myWindow.document.write("<p>This is my window</p>");
}

function moveToWindow(){
myWindow.moveTo(500,200);
} 
```
> in this we are maked a moveToWindow() function an give a moveto keyword and in parameter we give some digit number to left and top this will work when you hve your persnal web url otherwise you creat a docemnt.write and write something into this so this is moveTo option
---
### moveBy 
```javascript
var myWindow;

function openWindow(){
    myWindow = window.open("","_blank","width=500px,height=300px,left=100px,top=200px");
    myWindow.document.write("<p>This is my window</p>");
 }

function moveByWindow(){
    myWindow.moveBy(200,300);
}
```
> in is an diference between moveTo and moveBy
>  moveTo -> change there positin by obsalute value and
>  moveBy -> change there position by reletive value these are difference and all things all same
---
