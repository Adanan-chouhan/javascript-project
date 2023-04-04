document.write("<center><h1>object<h1><center>");
document.write("<br>");
var a = {
    fastName : "adnan" ,
    lastName : "chouhan" ,
    age : 19 ,
    family : {
        fatherName : "mo.aslam",
        motherName : "famida chouhan",
        brotherName : "arbaaz"
    },
    countery : "india" ,
    friendName : ["sulman","mujahid","sahil"],
    salary : function(){
        return 20000
    },
    fullName : function(){
        return this.fastName + " " + this.lastName 
    },

};
document.write(a.fullName() + "<br>");
document.write(a.salary() + "<br>");
document.write(a.family.fatherName + "<br>");
document.write(a.family.motherName + "<br>");
document.write(a.friendName);