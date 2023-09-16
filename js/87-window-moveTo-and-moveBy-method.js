var myWindow;

function openWindow(){
   myWindow = window.open("","_blank","width=500px,height=300px");
   myWindow.document.write("<p>This is my window</p>");
}

function moveToWindow(){
myWindow.moveTo(500,200);
} 

function openWindow(){
    myWindow = window.open("","_blank","width=500px,height=300px,left=100px,top=200px");
    myWindow.document.write("<p>hello I m adnan chouhan</p>");
 }

function moveByWindow(){
    myWindow.moveBy(200,300);
}