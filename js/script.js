var MenuItems = document.getElementById("MenuItems");
var ToggleBtn = document.getElementById("ToggleBtn");
MenuItems.style.maxHeight = '0px';

function menuToggle() {
    if (MenuItems.style.maxHeight == '0px') {
        MenuItems.style.maxHeight = '450px';
        MenuItems.style.opacity = '1';
        ToggleBtn.classList.add("fa-xmark");
    } else {
        MenuItems.style.maxHeight = '0px';
        ToggleBtn.classList.remove("fa-xmark");
        
    }
}

// window.addEventListener('scroll', reveal)

// function reveal(){
//     var reveals = document.querySelectorAll('.reveal')

//     for(var i = 1; i < reveals.length; i++){
//         var windowheight = window.innerHeight
//         var revealtop = reveals[i].getBoundingClientRect().top
//         var revealpoint = 150

//         if(revealtop < windowheight - revealpoint){
//             reveals[i].classList.add('show-animate')
//         }
//         else{
//             reveals[i].classList.remove('show-animate')
//         }
//     }
// }


const observer = new IntersectionObserver((entries) =>{
    entries.forEach((entry) =>{
        console.log(entry);

        if(entry.isIntersecting){
            entry.target.classList.add('show-animate')
        } else{
            entry.target.classList.remove('show-animate')
        }
    })
})

let col = document.querySelectorAll('.reveal');
col.forEach((el) => observer.observe(el));



// Slider jss

// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlide(index) {
//     slides.forEach((slide, i) => {
//         if (i === index) {
//             slide.style.display = 'block';
//         } else {
//             slide.style.display = 'none';
//         }
//     });
// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % slides.length;
//     showSlide(currentSlide);
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//     showSlide(currentSlide);
// }

// // Automatic sliding
// const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// // Button click handlers
// document.getElementById('prevBtn').addEventListener('click', prevSlide);
// document.getElementById('nextBtn').addEventListener('click', nextSlide);

// // Initial slide
// showSlide(currentSlide);

// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;

// function showSlides() {
//     for (let i = 0; i < slides.length; i++) {
//         if (i >= currentSlide && i < currentSlide + 3) {
//             slides[i].style.display = 'block';
//         } else {
//             slides[i].style.display = 'none';
//         }
//     }
// }

// function nextSlide() {
//     if (currentSlide + 3 < slides.length) {
//         currentSlide += 3;
//         showSlides();
//     } else {
//         currentSlide = 0;
//         showSlides();
//     }
// }

// // Automatic sliding
// const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// // Initial slide
// showSlides();

const slides = document.querySelectorAll('.slid');
let currentSlide = 0;
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        if (i >= currentSlide && i < currentSlide + 3) {
            slides[i].style.opacity = 1;
            slides[i].style.display = 'block';
        } else {
            slides[i].style.opacity = 0;
            slides[i].style.display = 'none';
        }
    }
}

function nextSlide() {
    if (currentSlide + 3 < slides.length) {
        currentSlide += 3;
    } else {
        currentSlide = 0;
    }
    showSlides();
}

// Automatic sliding
const interval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

// Initial slide
showSlides();