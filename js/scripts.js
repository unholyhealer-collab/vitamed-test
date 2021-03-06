const slide = document.querySelector('.slide');
const images = document.querySelectorAll('.slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

const whatsapp = document.querySelector('#whatsapp');
const instagram = document.querySelector('#instagram');

whatsapp.addEventListener('click', ()=>{
    window.open();
});

instagram.addEventListener('click', ()=>{
    window.open('https://www.instagram.com/timur_mironyuk/');
});

let counter = 1;
const size = images[0].clientWidth;

slide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click',()=>{
    if(counter >= images.length - 1) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter++;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click',()=>{
    if(counter <= 0) return;
    slide.style.transition = "transform 0.4s ease-in-out";
    counter--;
    slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

slide.addEventListener('transitionend', ()=>{
    if(images[counter].id === 'lastClone'){
        slide.style.transition = "none";
        counter = images.length - 2;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if(images[counter].id === 'firstClone'){
        slide.style.transition = "none";
        counter = images.length - counter;
        slide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});