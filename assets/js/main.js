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

//****************  REMOVE MENU   ********************//
const navLink = document.querySelectorAll('.nav__link');
    // when you click on each nav__link, we remove the show-menu class
function linkAction(){ 
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



/********************************************************************************/ 
/********************************** SKILLS LIST *********************************/ 
const   skillsContent = document.getElementsByClassName('skill__content');
        skillHeader = document.querySelectorAll('skill__header')

function toggleSkills(){

    let itemClass = this.parentNode.className

    for(var i = 0; i<= skillsContent.length; i++){
        skillsContent[i].className = 'skill__content skill__close';
    }
    if(itemClass === 'skill__content skill__close'){
        this.parentNode.className = 'skill__content skill__open';
    }
    
}
skillHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
});

/**************************************************************************************/
/*********************************  QUALIFICATION TAB  ********************************/  
const   tabs = document.querySelectorAll('[data-target]'),
        tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {

    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach(tabContent =>{
            tabContent.classList.remove('qualification__active');
        })
        target.classList.add('qualification__active');

        tab.forEach(tab =>{
            tab.classList.remove('qualification__active');
        })
        tab.classList.add('qualification__active');
    })
});

/**************************  PORTFOLIO SWIPER  ******************************/ 
let swiper = new Swiper(".portfolio__container", {
    cssMode: true,
    loop:true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable:true,
    },
    mousewheel: true,
    keyboard: true,

});






