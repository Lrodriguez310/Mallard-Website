// change navbar style when scrolling

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0) //change this number to adjust pixel scroll
})


// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');  //opens the dam whatcha ma call it... the hidden block of P tag text

        //change icon
        const icon = faq.querySelector('.faq__icon i');
         if(icon.className === 'uil uil-plus') {
            icon.className = "uil uil-minus";
         } else {     //toggles it back to plus icon
            icon.className = "uil uil-plus";
         }
    })
})


// show/hide nav menu

const menu = document.querySelector(".nav__menu");
const menuBtn = document.querySelector("#open-menu-btn");
const closeBtn = document.querySelector("#close-menu-btn");


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
})

// close nav menu

const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
}

closeBtn.addEventListener('click', closeNav)