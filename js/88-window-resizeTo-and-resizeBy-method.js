
var myWindow;

function openWindow(){
    myWindow = window.open("","","width=200px,height=200px,lft=100,top=200");
    myWindow.document.write("<p>This is my window</p>");
}

function resizeToWindow(){
    myWindow.resizeTo(400,400);
}

function openWindow(){
    myWindow = window.open("","","width=200px,height=200px,lft=100,top=200");
    myWindow.document.write("<p>This is my window</p>");
}

function resizeByWindow(){
    myWindow.resizeBy(400,400);
}