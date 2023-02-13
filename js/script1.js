//define all UI variable

const navToggler = document.querySelector(".nav-toggler");
const navMenu = document.querySelector("site-navbar ul");
const navLinks = document.querySelectorAll("site-navbar a");


//load all event listners

allEventListners();

//functions of all event listners

function allEventListners(){

    navToggler.addEventListener("click",togglerClick);
    navLinks.forEach(elem=>elem.addEventListener("click",navLinkClick));
}

//togglerClick function

function togglerClick() {
    navToggler.classList.toggle("toggler-open");
    navMenu.classList.toggle("open");
}

//navLinkClick

function navLinkClick() {

    if(navMenu.classList.contains("open")) {
        navToggler.click();
    }
}


