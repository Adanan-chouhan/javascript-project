# windo resizeTo and resizeBy method
## [JS-FILE](/js/88-window-resizeTo-and-resizeBy-method.js)

### resizeTo
> The resizeTo() method resizes a window to a new width and height.

```javascript
var myWindow;

function openWindow(){
    myWindow = window.open("","","width=200px,height=200px,lft=100,top=200");
    myWindow.document.write("<p>This is my window</p>");
}

function resizeToWindow(){
    myWindow.resizeTo(400,400);
}
```
> in this we are maked a resizeToWindow() function an give a resizeto keyword and in parameter we give some digit number to width and heigth this will work when you hve your persnal web url otherwise you creat a docemnt.write and write something into this so this is resizeTo option
---

### resizeBy
> The resizeBy() method resizes a window by a specified amount.

```javascript
function openWindow(){
    myWindow = window.open("","","width=200px,height=200px,lft=100,top=200");
    myWindow.document.write("<p>This is my window</p>");
}

function resizeByWindow(){
    myWindow.resizeBy(400,400);
}
```
>  in is an diference between resizeTo and resizeBy
>  resizeTo -> change there positin by obsalute value and
>  resizeBy -> change there position by reletive value these are difference and all things all same
---
