
/* MENU BUTTONS, NAVIGATION and SHOWCASE EVENTS */
/* BARS */


document.getElementById('bars-btn').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('show');
    document.getElementById('bars-btn').style.display = 'none';
    document.getElementById('close-btn').style.display = 'block';
})


/* CLOSE */
document.getElementById('close-btn').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('show');
    document.getElementById('bars-btn').style.display = 'block';
    document.getElementById('close-btn').style.display = 'none';
})
/* if (document.getElementById('nav').style.transform = "translateX(0px)") {
    document.getElementById('showcase').style.visibility = "hidden";
} else {
    document.getElementById('showcase').style.visibility = "visible";
}
 */