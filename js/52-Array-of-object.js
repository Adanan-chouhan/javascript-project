document.write("<h1><center>Array of object<center><h1>");
document.write("<br>");

var student = [
    {Name : "adnan",Age : 19},
    {Name : "arbaaz",Age : 17},
    {Name : "mujahid",Age : 20}, 
];

for(var a = 0; a < 3;a++){
    document.write(student[a].Name + " " + student[a].Age + "<br>");
}