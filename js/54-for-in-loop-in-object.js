document.write("<center><h1>FOR IN LOOP IN OBJECT<h1><center>");
document.write("<br>");
var obj = {
firstName : "adnan",
laName : "chouhan",
age : 20,
student : "BCA"
};

for(var key in obj){
    document.write( key + " : " + obj[key] + "<br>");
}