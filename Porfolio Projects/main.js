// Show Menu
const navMenu = document.getElementById("nav-menu"),
      navToggle = document.getElementById("nav-toggle"),
      navClose = document.getElementById("nav-close");

// MENU SHOW
if (navToggle) {
    navToggle.addEventListener("click", () => {
        navMenu.classList.add("show-menu");
    });
}

// MENU HIDDEN
if (navClose) {
    navClose.addEventListener("click", () => { // <-- Corrected from navToggle
        navMenu.classList.remove("show-menu");
    });
}
// REMOVE MENU
const navLinks=document.querySelectorAll(".nav__link");

navLinks.forEach(link=>{

    link.addEventListener("click",ActionLink)
});
function ActionLink()
{
    navMenu.classList.remove("show-menu");
}
// BLUR  HEADER
window.addEventListener('scroll',blurHeader);
function blurHeader()
{
    const header=document.getElementById('header');
    if(scrollY>=50)
    {
        header.classList.add('blur-header');
    }
    else
    {
        header.classList.remove('blur-header');
    }
}

// EMAIL JS

// const contactForm=document.getElementById("contact-form"),
// contactMessage=document.getElementById("contact-message");
// contactForm.addEventListener('submit',)

// const SendEmail=(e)=>{
// e.preventDefault()
// }

// SCROLL UP
const scroll_up=document.getElementById("scroll-up");
window.addEventListener("scroll",ActionScroll);
function ActionScroll()
{
    if(this.scrollY>=700)
    {
     scroll_up.classList.add("show__scroll__up");
    }
    else
    {
        scroll_up.classList.remove("show__scroll__up");
    }
}

// animation

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
});

sr.reveal('.home__data, .home__social, .contact__container, .footer__container');
sr.reveal('.home__image', { origin: 'bottom' });
sr.reveal('.about__image', { origin: 'right' });
sr.reveal('.about__data, .skils__data', { origin: 'left' });
sr.reveal('.skills__content', { origin: 'right' });
sr.reveal('.services__card, .projects__card', { interval: 100 });
// THEME SWITCHER

const Themes = document.querySelectorAll(".theme_color");
const themeContainer = document.querySelector(".theme__container");


function remvoveClasses()
{
    document.body.classList.remove('pink','blue','green','orange','purple');
}


const pinkColor=document.getElementById("pink__theme");
pinkColor.addEventListener('click',()=>{

    remvoveClasses();
    document.body.classList.toggle("pink");
});

const blueColor=document.getElementById("blue__theme");
blueColor.addEventListener('click',()=>{
remvoveClasses();
    document.body.classList.toggle("blue");
});

const greenColor=document.getElementById("green__theme");
greenColor.addEventListener('click',()=>{
remvoveClasses();
    document.body.classList.toggle("green");
});

const orangeColor=document.getElementById("orange__theme");
orangeColor.addEventListener('click',()=>{

    remvoveClasses();
    document.body.classList.toggle("orange");
});

const purpleColor=document.getElementById("purple__theme");
purpleColor.addEventListener('click',()=>{
remvoveClasses();
    document.body.classList.toggle("purple");
});



