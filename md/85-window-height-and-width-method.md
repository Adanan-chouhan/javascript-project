# window height and width method 
## [JS-FILE](/js/85-window-height-and-width-method.js)

> in this we are talking about width and height so first of all we have to know that how to get width and height so ther are 4 methods to get them 
* 1 -> innerheigth 
* 2 -> innerwidth 
* 3 -> outerheight 
* 4 -> outerwidth

> so we have to know about this work first of all watch this 
![height](/images/Screenshot%20from%202023-03-22%2022-55-17.png)
> in this you will see that we have two inner and outer height method so first se innner height -> in this you can select all the working are that means inside viewport and in outer hight -> in this you can select full browser its mean all that you see forword arrow backword arrow at the top you all watching you can select all

> now we ar going to know about width first you have to watch this
![widht](/images/Screenshot%20from%202023-03-22%2022-55-52.png)
> in this same as height in inner width you can select full of view port in outer width you can select all aof window i mean thart browser window boorder too
---

> so lets begain with js practical

### height
```javascript
var iheigth = innerHeight;
console.log(iheigth);

var oheight = outerHeight;
console.log(oheight);
```
> in this we can find the hight of inner and outer so lets start to explain you 1st i maked one variable the i told u that if u are working in BOM then just use window method so i call window metod and then what i maked inerhieght and outer height so this is the method of inner and outer hieght
---

### width
> in this first you have to watch structure

```javascript
var iwidth = innerWidth;
console.log("inner width : " + iwidth);

var owidth = outerWidth;
console.log("outer width : " + owidth);
```
> all the methods are same as height in width so you have to read the height method to implement in bith differense is i putted width at the place of height
---