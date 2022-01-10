var showNavX = 50;
var hideNavX = 250;
var translateAmount = '2000';

var navlinks = document.getElementsByClassName("navlink");
var navleft = document.getElementById("navleft");
var screenOverlay = document.getElementById("screen-overlay");
var indicator = document.getElementById("indicator");

// on navlink click
for (i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", hideNavLeft);
}

// onscroll
document.addEventListener("scroll", hideNavLeft);

function hideNavLeft() {
    if (window.scrollY < window.innerHeight/2) {
        screenOverlay.style.opacity = "0";
        indicator.style.opacity = "0";
        indicator.style.transform = "scaleY(0)";
        navleft.style.transform = "translate(0px, 0px)";
    } else {
        screenOverlay.style.opacity = "0";
        indicator.style.opacity = "1";
        indicator.style.transform = "scaleY(2)";
        navleft.style.transform = "translate(-" + translateAmount + "px, 0px)";
    }
}

// mouse move
document.addEventListener('mousemove', e => {
    if (!(window.scrollY < window.innerHeight/2)) {
        if (e.x < showNavX) {
            indicator.style.opacity = "0";
            screenOverlay.style.opacity = "0.8";
            indicator.style.transform = "scaleY(0)";
            navleft.style.transform = "translate(0px, 0px)";
        } else if (e.x > hideNavX) {
            indicator.style.opacity = "1";
            screenOverlay.style.opacity = "0";
            indicator.style.transform = "scaleY(2)";
            navleft.style.transform = "translate(-" + translateAmount + "px, 0px)";
        }
    }
});