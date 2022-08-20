
//Navbar Fixed Top
const nav = document.querySelector('#navbar');
let navTop = nav.offsetTop;

function fixedNav() {
  if (window.scrollY >= navTop) {    
    nav.classList.add('fixed-top');
  } else {
    nav.classList.remove('fixed-top');    
  }
}
window.addEventListener('scroll', fixedNav);

//Counter
$(document).ready(function () {
  $('.counter-value').counterUp({
      delay: 10,
      time: 1000
  });
})
//Preeloader
// PRE LOADER
$(window).load(function(){
  $('.preloader').fadeOut(1000); // set duration in brackets    
});

// Initi AOS
function aos_init() {
  AOS.init({
    duration: 3000,
    once: true
  });
}
$(window).on('load', function() {
  AOS.init();
});