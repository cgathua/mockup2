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

const menuBtn = document.getElementById('menu-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('navbar2');
//end of open & close nav menu

menuBtn.addEventListener('click', () => {
    menu.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
   
}); 
 //end of open sidebar

 closeBtn.addEventListener('click', () => {
    menu.style.display = 'none';
    closeBtn.style.display = 'none';
    menuBtn.style.display ='inline-block';
}); //end of close sidebar
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

