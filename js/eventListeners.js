var showNavX = 50;
var hideNavX = 250;

var navlinks = document.getElementsByClassName("navlink");

// on navlink click
for (i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", hideNavLeft);
}

// onscroll
document.addEventListener("scroll", hideNavLeft);

function hideNavLeft() {
    if (window.scrollY < window.innerHeight/2) {
        document.getElementById("screen-overlay").style.visibility = "hidden";
        document.getElementById("navleft").style.transform = "translate(0px, 0px)";
    } else {
        document.getElementById("screen-overlay").style.visibility = "hidden";
        document.getElementById("navleft").style.transform = "translate(-1000px, 0px)";
    }
}

// mouse move
document.addEventListener('mousemove', e => {
    if (!(window.scrollY < window.innerHeight/2)) {
        if (e.x < showNavX) {
            document.getElementById("screen-overlay").style.visibility = "visible";
            document.getElementById("navleft").style.transform = "translate(0px, 0px)";
        } else if (e.x > hideNavX) {
            document.getElementById("screen-overlay").style.visibility = "hidden";
            document.getElementById("navleft").style.transform = "translate(-1000px, 0px)";
            
        }
    }
});