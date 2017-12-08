var nav = document.getElementById("navdiv");
var bar1 =document.getElementById("bar1");
var bar2 =document.getElementById("bar2");
var bar3 =document.getElementById("bar3");

function openNav() {
    nav.style.width = "100vw";
    bar1.style.backgroundColor = "whitesmoke";
    bar2.style.backgroundColor = "whitesmoke";
    bar3.style.backgroundColor = "whitesmoke";
}

function closeNav() {
    nav.style.width = "0";
    bar1.style.backgroundColor = "black";
    bar2.style.backgroundColor = "black";
    bar3.style.backgroundColor = "black";
}