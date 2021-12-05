function hoverButton (){
    document.getElementById("button").style.backgroundColor="#00bc8a";
}
function hover (){
    document.getElementById("button").style.backgroundColor="#00bc8a";
}
function show(){
    document.getElementById("learn2").style.visibility="visible";
}
function hide(){
    document.getElementById("learn2").style.visibility="hidden";
}
var n=0;
function hovered(){
    n =n+1;
    document.getElementById("img1").innerHTML=n;
}
function clc(){
    document.getElementById("clicks").style.color="#f50";
    document.getElementById("clicks").style.textDecoration="underline"
}
function valid(){
    var t = prompt("Name ..");
    if(t == "dhuha")
    {
        window.location='index.html'
    }
    else
    {
        alert("Wrong !")
    }
}