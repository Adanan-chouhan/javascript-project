document.write("<center><h1>SWITCH CASE<h1><center>");
document.write("<hr>");
var day = 3;
switch(day){
    case 0 :
         document.write("today is monday");
    break;
    case 1 :
         document.write("today is tusday");
    break;
    case 2 :
         document.write("today is wednsday");
    break;
    case 3 :
         document.write("today is thusday");
    break;
    case 4 :
         document.write("today is friday");
    break;
    case 5 :
         document.write("today is saturday");
    break;
    case 6 :
         document.write("today is sunday");
    break;
    default:
        document.write("enter the valid day");
}