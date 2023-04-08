"use strict";
const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
    faq.addEventListener('click', () => {
        if(!faq.classList.contains('active')){
            faqs.forEach(faq => {
                faq.classList.remove('active');
            })
        };
        faq.classList.toggle('active');
    });
});
// END OF FAQ JAVASCRIPT

const menuBtn = document.querySelector('#menu-btn');
const navMenu = document.querySelector('#navbar2');

menuBtn.addEventListener('click', () =>{
    menuBtn.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener
    ('click', () => {
        menuBtn.classList.remove('active');
        navMenu.classList.remove('active');
    }))
// END OF HAMBURGER MENU

const navItems = document.querySelectorAll('nav ul li');

const removeActiveClass = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
} // remove active class from other items

navItems.forEach(item => {
    const link  = item.querySelector('a');
    link.addEventListener('click', () =>{
        removeActiveClass();
        link.classList.add('active');   
    })   
}) //add active class to clicked nav item
// END OF DESKTOP ACTIVE CLASS LINKS

