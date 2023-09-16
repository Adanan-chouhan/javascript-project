
document.write(location.hash);
document.write("<br>");
document.write(location.host);
document.write("<br>");
document.write(location.hostname);
document.write("<br>");
document.write(location.href);
document.write("<br>");
document.write(location.origin);
document.write("<br>");
document.write(location.pathname);
document.write("<br>");
document.write(location.port);
document.write("<br>");
document.write(location.protocol);
document.write("<br>");
document.write(location.search);

// url set ker nay kay liya 
function loctionPropertyset(){
location.href = "https://www.youtube.com/";
}

// location method thre method
function locationAssignMethod(){
    location.assign("https://www.google.com/");
}

function locationReloadMethod(){
    location.reload();
}

function locationReplaceMethod(){
   loction.replace("https://www.instagram.com/");
}
