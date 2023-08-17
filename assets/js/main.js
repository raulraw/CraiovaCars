/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')


      if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
      }


      if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
      }
/*=============== REMOVE MENU MOBILE ===============*/


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header');
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)

/*=============== POPULAR SWIPER ===============*/

let swiperPopular = new Swiper(".popular__container", {

    loop: true,
    spaceBetween: 24,
    slidePerView: 'auto',
    grabCursor: true,


    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {

        400:{
            slidesPerView: 2,
        },
        
        600:{
            slidesPerView: 2,
        },

        768: {
            slidesPerView: 3,

        },
        1024: {

            spaceBetween: 48,
            slidesPerView: 2,
        },
    },
});


/*=============== MIXITUP FILTER FEATURED ===============*/
let mixerFeatured = mixitup('.featured__content', {
    selectors:{
        target: '.featured__card'
    },
    animation:{
        duration: 300
    }
});

/* Link active featured */
const linkFeatured = document.querySelectorAll('.featured__item')

function activeFeatured(){
    linkFeatured.forEach(l=> l.classList.remove('.active-featured'))
    this.classList.add('active-featured')
}

linkFeatured.forEach(l=> l.addEventListener('click', activeFeatured))

/*=============== SHOW SCROLL UP ===============*/


function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');

    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

function scrollActive(){

    const scrollY = window.pageYOffset

    SpeechRecognitionResult.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.geatAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)
/*=============== SCROLL REVEAL ANIMATION ===============*/


const sr = ScrollReveal({

    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay:400,
})

sr.reveal(`.home__title, .popular__container, .features__img, .featured__filters`)
sr.reveal(`.home__subtitle`, {delay: 500})
sr.reveal(`.home__elec`, {delay: 600})
sr.reveal(`.home__img`, {delay: 800})
sr.reveal__(`.home__car-data`, {delay: 900, interval: 100, origin: 'bottom'})
sr.reveal__(`.home__button`, {delay: 1000, origin: 'bottom' , delay: 600})
sr.reveal(`.about__data, .offer__img`, {origin:'right' })
sr.reveal(`.about__group, .offer__data`, {origin:'left'})
sr.reveal(`.features__map`, {origin:'bottom', delay: 600})
sr.reveal(`.features__card`, {interval: 300})
sr.reveal(`.featured__card, logos__content, .footer-content`, {interval: 100})
