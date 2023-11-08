/*=============== SHOW MENU ===============*/
const navMenu = document.querySelector('#nav-menu'),
   navToggle = document.querySelector('#nav-toggle'),
   navClose = document.querySelector('#nav-close');

/* validate if constant exist */
if (navToggle) {
   navToggle.addEventListener('click', () => {
      navMenu.classList.add('show-menu')
   })
}

/*=============== MENU HIDDEN ===============*/
if (navClose) {
   navClose.addEventListener('click', () => {
      navMenu.classList.remove('show-menu')
   })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () => {
   const navMenu = document.getElementById('nav-menu')
   navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== ADD BLUR HEADER ===============*/
const blurHeader = () => {
   const header = document.getElementById('header')
   this.scrollY >= 50 ? header.classList.add('blur-header')
      : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)

/*=============== SWIPER FAVORITES ===============*/
let swiperFavorite = new Swiper('.favorite__swiper', {
   loop: true,
   slidesPerView: 'auto',
   centeredSlides: 'auto',
   grabCursor: true,

   brakpoints: {
      768: {
         slidesPerView: 3,
      }
   }
});

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
   const scrollUp = document.getElementById('scroll-up')
   this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
      : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () => {
   const scrollDown = window.scrollY

   sections.forEach(current => {
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

      if (scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight) {
         sectionClass.classList.add('active-link')
      } else {
         sectionClass.classList.remove('active-link')
      }
   })
}
window.addEventListener('scroll', scrollActive)


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
   origin: 'top',
   distance: '60px',
   duration: 2500,
   delay: 400,
   // reset: true, //animations repeat
})

sr.reveal(`.home__social, .favorite__container, .sponsor__container, .footer`)
sr.reveal(`.home__title span:nth-child(1)`, { origin: 'left', opacity: 1 })
sr.reveal(`.home__title span:nth-child(3)`, { origin: 'right', opacity: 1 })
sr.reveal(`.home__title span:nth-child(2)`, { origin: 'top', opacity: 1 })
sr.reveal(`.home__tooltip, .home__button, .model__button`, {origin: 'bottom'})
sr.reveal(`.about__data`, {origin: 'left'})
sr.reveal(`.about__img, .model__tooltip`, {origin: 'right'})

