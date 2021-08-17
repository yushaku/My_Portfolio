/*=========================  MENU SHOW Y HIDDEN  =============================*/
const   navMenu = document.getElementById('nav-menu'),
        navToggle = document.getElementById('nav-toggle'),
        navClose = document.getElementById('nav-close');

//                          MENU SHOW                               //
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
//********************  MENU HIDDEN  **********************//
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu');
    })
}

//****************  REMOVE MENU MABILE  ********************//
const navLink = document.querySelectorAll('.nav__link');
    // when you click on each nav__link, we remove the show-menu classs
function linkAction(){ 
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));


















