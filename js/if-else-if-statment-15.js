document.write("<center><h1>IF ELSE IF STATMENT<center><h1>");
document.write("<hr>");
var per = 55;
if(per >= 80 && per <= 100){
    document.write("you are in merit.");
}else if(per >= 60 && per <= 80){
document.write("you are a 1st division.");
}else if(per >= 45 && per <= 60){
    document.write("you are a 2nd division.");
    }else if(per >= 33 && per <= 45){
        document.write("you are a 3rd division.");
        }else if(per<33){
            document.write("you are in fail")
        }else{
            document.write("enter your valid percent")
        }
        