/*---------------------------Side Bar--------------------------- */

function openNav(){
    document.getElementById("sideBar").style.width = "10rem";
    document.getElementById("bars").style.marginRight = "8rem"
    document.getElementById("openbtn").style.display = "none"
}

function closeNav(){
    document.getElementById("sideBar").style.width = "0";
    document.getElementById("bars").style.marginRight = "0"
    document.getElementById("openbtn").style.display = "block"
}

/*---------------------------Home Pagge Slide Image----------------------*/

function first(){
    document.getElementById("slideImage").src = "images/home1.jpg";
}

function second(){
    document.getElementById("slideImage").src = "images/home4.jpg";
}

function third(){
    document.getElementById("slideImage").src = "images/home5.jpg";
}

function fourth(){
    document.getElementById("slideImage").src = "images/home2.jpg";
}

function fifth(){
    document.getElementById("slideImage").src = "images/home3.jpg";
}

setInterval(first, 3000);
setInterval(second, 6000);
setInterval(third, 9000);
setInterval(fourth, 12000);
setInterval(fifth, 15000);

