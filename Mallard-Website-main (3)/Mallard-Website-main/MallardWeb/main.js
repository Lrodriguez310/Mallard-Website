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





const images = document.getElementsByClassName("image");

let globalIndex = 0;
    last = { x:0, y:0 };

const activate = (image, x, y) => {
    image.style.left = `${x}px`;
    image.style.top = `${y}px`;

    image.dataset.status = "active";

    last = { x, y };
}

const distanceFromLast = (x, y) => {
    return Math.hypot(x - last.x, y - last.y);
}

window.onmousemove = e => {

    if(distanceFromLast(e.clientX, e.clientY) > 100) {
    const lead = images[globalIndex % images.length];
          tail = images[(globalIndex - 5) % images.length];

    activate(lead, e.clientX, e.clientY);

    if(tail) tail.dataset.status = "inactive";

    globalIndex++;
  }
}

// for bubble

/*const wrapper = document.getElementById("bubble-wrapper");

const animateBubble = x => {
    const bubble = document.createElement("div");

    bubble.className = "bubble";

    bubble.style.left = `${x}px`;

    wrapper.appendChild(bubble);

    setTimeout(() => wrapper.removeChild(bubble), 2000);
}

window.onmousemove = e => animateBubble(e.clientX); */